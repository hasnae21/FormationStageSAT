import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {
  addCustomersForm!: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    
    
    const ComposeValidation = Validators.compose([Validators.required])

    this.addCustomersForm = this.fb.group({
      'firstName': new FormControl('', ComposeValidation),
      'lastName': new FormControl('', ComposeValidation),
      'mail': new FormControl('', ComposeValidation),
      'psw': new FormControl('',
        [
          Validators.minLength(10),
          Validators.maxLength(20),
        ]
      )
    })


    // const Data = {
    //   'firstName': "Hasnae",
    //   'lastName': "AHOUZI",
    //   'mail': "HasnaeAHOUZI@gmail.com",
    //   'psw': "HasnaePASSWORD"
    // }
    // // you need to pass all key/fields values use setValue
    // // this.addCustomersForm.setValue(Data);
    // // you don't need to pass all key/fields values use patchValue
    // this.addCustomersForm.patchValue(Data);
    
  }

  addCustomerData() {
    console.log(this.addCustomersForm.value);

    console.log(this.addCustomersForm.get('firstName')!.value);
    console.log(this.addCustomersForm.get('lastName')!.value);
    console.log(this.addCustomersForm.get('mail')!.value);
    console.log(this.addCustomersForm.get('psw')!.value);

    this.addCustomersForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

}
