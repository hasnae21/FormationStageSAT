import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  {path: 'completed-tasks', component: CompletedTasksComponent},
  {path: 'list-users', component: ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
