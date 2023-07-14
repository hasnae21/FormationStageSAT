import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
//import { adminGuard } from './admin.guard';
import { superAdminGuard } from './super-admin.guard';
import { adminAccessGuard } from './admin-access.guard';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { modeleGuard } from './modele.guard';
import { unsavedGuard } from './unsaved.guard';

const routes: Routes = [
  {
    path: 'add',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: AddLoansComponent
  },

  {
    path: 'test',
    component: AddLoansComponent,
    outlet: 'route 1'
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AddLoansComponent
  },

  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'product/:productId/photos/:photoId',
    component: ProductComponent
  },

  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
  },

  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [authGuard, modeleGuard]
  },

  {
    path: 'admin',
    canActivate: [superAdminGuard],
    children:
      [
        {
          path: '',
          component: AdminComponent
        },
        {
          path: '',
          canActivateChild: [adminAccessGuard],
          children:
            [
              { path: 'manage', component: AdminManagerComponent },
              { path: 'edit', component: AdminEditComponent },
              { path: 'delete', component: AdminDeleteComponent },
            ]
        }
      ]
  },

  {
    path: 'search',
    component: SearchComponent,
    canDeactivate: [unsavedGuard]
  },

  // this path should be the last one /page 404
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
