import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example-service.service'
import { User } from './users/interface/user'
@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {

  users: User[] = [];
  x: User = {
    id: 111,
    login: 'teste',
    avatar_url: 'https://avatars2.githubusercontent.com/u/35?v=4'
  }
  constructor(private exampleService: ExampleService) { }

  ngOnInit(): void {
    this.exampleService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      })
  }

  addTeste() {
    this.exampleService.addLembrete(this.x).subscribe(
      () => {
        console.log("deu certo");
      },
      () => {
        console.log("errado");
      }
    )

  }
  trackById(index: number, item: User) {
    return item.id
  }

}
