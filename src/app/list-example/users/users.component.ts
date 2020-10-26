import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from './interface/user';
import { ExampleService } from '../example-service.service';

@Component({
  selector: 'app-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  @Input() user: User = <User>{};

  constructor(private exampleService: ExampleService) { }

  deleteUser(id: number) {
    console.log(id);

    this.exampleService.deletaUser(id).subscribe(
      () => { }
    );
  }
}
