import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUsersComponent } from './add-users/add-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';


const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'add', component: AddUsersComponent },
  { path: 'update', component: EditUsersComponent },
  { path: 'delete', component: DeleteUsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
