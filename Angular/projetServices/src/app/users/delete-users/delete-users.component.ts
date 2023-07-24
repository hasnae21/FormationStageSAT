import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.scss']
})
export class DeleteUsersComponent implements OnInit{

constructor(private usersService: UsersService){ }
  
  ngOnInit(): void { }
  
  deleteUser(){
    this.usersService.deleteUser(1).subscribe(data => {
      console.log("User deleted successfully")
    },(err)=> {
      console.log("Unable to delete user" + err);
    })
  }

}
