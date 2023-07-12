import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit{

  firstname :string = ' ' ;
  terms:boolean = false ;
  customerType:String = ' ';
  description :String =' ';

  constructor(){  }

  ngOnInit():void { }

  addCustomer(formValue: NgForm){
    console.log(formValue.value);
  }
  resetForm(formDirt: NgForm){
    formDirt.reset();
  }

  loadFormValue(formValue: NgForm){

    let Data = {
      firstname : 'Hasna',
      terms : true,
      customerType : '3',
      description  : ' '
    }

    formValue.setValue(Data);

  }
}
