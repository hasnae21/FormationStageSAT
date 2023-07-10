import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  { path: 'add', redirectTo:'home' },
  { path: 'home',component:AddLoansComponent },


  { path: 'product/:id',component:ProductComponent },
  { path: 'product/:productId/photos/:photoId',component:ProductComponent },

  { path: 'clients',component:ClientsComponent },


  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home',component:AddLoansComponent },


  { path: 'search',component:SearchComponent},
  { path: '**',component:PageNotFoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
