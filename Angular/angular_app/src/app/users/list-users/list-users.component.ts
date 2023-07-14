import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit{

  ngOnInit():void{
  }

  userRole: boolean = false;

  array:any=[
    {name: "Hasnae"},
    {name: "Omar"},
    {name: "Mariam"}
  ];
}
