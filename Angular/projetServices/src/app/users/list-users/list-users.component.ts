import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: any;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    })

  }
}

