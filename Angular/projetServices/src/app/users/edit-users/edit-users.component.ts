import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit{

  constructor(private userService: UsersService){ }

  ngOnInit(): void{
    this.userService.updateUser();
  }

  updateUser() {
    
    this.userService.updateUser().subscribe(data =>{
      console.log(data);
    }, (err)=> {
      console.log(err);
    })

  }


}
