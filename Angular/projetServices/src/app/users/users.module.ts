import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { AddUsersComponent } from './add-users/add-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { usersComponent } from './users.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddUsersComponent,
    ListUsersComponent,
    usersComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
