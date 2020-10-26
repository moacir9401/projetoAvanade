import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [ListExampleComponent, UsersComponent],
  imports: [
    CommonModule,
    ListExampleRoutingModule
  ],
  providers: []
})
export class ListExampleModule { }
