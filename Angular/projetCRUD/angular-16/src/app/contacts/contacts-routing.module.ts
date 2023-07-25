import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: 'edit', component: EditComponent },
      { path: 'delete', component: DeleteComponent },
      { path: 'search', component: SearchComponent },
      { path: 'view', component: ViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
