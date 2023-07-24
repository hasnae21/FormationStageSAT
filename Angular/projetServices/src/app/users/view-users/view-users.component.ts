import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactsService } from 'src/app/services/contacts.service';


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  contacts$: any;
  users: any;
  userStatus: any;
  userList$: any;
  userDetails: any;
  userMsg: any;

  constructor(private contactService: ContactsService){  }

  ngOnInit(): void {

    //Exemple 1
    this.users =['ram', 'lisa', 'sita', 'mark'];
    this.contacts$ = of(this.users);
    console.log(this.contacts$);

    //Exemple 2
    new Observable(key => {

      setTimeout(()=> {
        key.next('In Progress');
      }, 2000);
      setTimeout(()=> {
        key.next('Pending');
      }, 4000);
      setTimeout(()=> {
        key.next('Completed');
      }, 6000);

    }).subscribe(data=> {
      this.userStatus = data;
    }, error => {
      console.log(error);
    })

    //Exemple 3
    this.contactService.getUsers().subscribe(data => {
      this.userList$ = data;
    }, error => {
      console.log(error);
    })

    //Exemple 4
    this.contactService.viewUser().toPromise()
    .then(response =>{
        this.userDetails = response
    })
    .catch(error => {
        console.log(error)
    })
    .finally(()=> {
       this.userMsg = "user details loaded";
    })

  }

}
 