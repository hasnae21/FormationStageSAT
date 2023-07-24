import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { AddUsersComponent } from './add-users/add-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { usersComponent } from './users.component';


import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    usersComponent,
    AddUsersComponent,
    ListUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
