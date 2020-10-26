import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './users/interface/user';

const routes = {
  users: () => `/users`,
};


@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(routes.users())
      .pipe(
        catchError(() => of('Error'))
      );
  }

  addLembrete(user: User): Observable<User[]> {
    return this.httpClient.post<User[]>(routes.users(), user)
  }

  atualizaLembrete(user: User): Observable<User[]> {
    return this.httpClient.put<User[]>(routes.users(), user);
  }

  deletaUser(id: number): Observable<User[]> {
    return this.httpClient.delete<User[]>(`${routes.users()}/${id}`);
  }
}


