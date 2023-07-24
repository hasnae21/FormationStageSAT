import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})

export class AddUsersComponent implements OnInit {

  firstname: string = ' ';
  terms: boolean = false;
  customerType: String = ' ';
  description: String = ' ';
  constructor(private usersService: UsersService) { }
  ngOnInit(): void {}

  addCustomer(formValue: NgForm) {
    console.log(formValue.value);

    const postBody = {
      title: formValue.value.firstname,
      body: formValue.value.description
    };
    this.usersService.addUsers(postBody).subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log("Unable to add user" + err);
    })
  }

}
