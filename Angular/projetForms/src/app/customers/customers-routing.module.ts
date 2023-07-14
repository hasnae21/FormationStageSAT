import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'drivenForm', component: AddCustomerComponent },
  { path: 'reactiveForm', component: AddCustomersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
