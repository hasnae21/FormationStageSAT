import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';


import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';


//don't forget to import FormsModule in order to work with / Driven Form
import { FormsModule } from '@angular/forms';

//don't forget to import ReactiveFormsModule in order to work with / Reactive Form
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    AddCustomersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
