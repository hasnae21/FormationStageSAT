import { Component } from '@angular/core';


// export interface PeriodicElement {
  //   id: number;
  //   firstName: string;
  //   lastName: string;
  // }
  
  
  
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
  })
export class AppComponent {
  title = 'testAngular';
  
  //const ELEMENT_DATA: PeriodicElement[] = [
  contacts = [
      {
        'id': 76,
        'firstName':'Hasnae',
        'lastName':'AHOUZI',
        'email': "{firstName}.{lastName}@gmail.com"
  
      },
      {
        'id': 534,
        'firstName':'Boutaina',
        'lastName':'AHOUZI',
        'email': "{firstName}.{lastName}@gmail.com"
      }
      // {
      //   id: 64353,
      //   firstName:'Adnan',
      //   lastName:'AHOUZI',
      //   email: "{firstName}.{lastName}@gmail.com"
        
      // },
      // {
      //   id: 7845,
      //   firstName:'Yahya',
      //   lastName:'AHOUZI',
      //   email: "{firstName}.{lastName}@gmail.com"
      // },
      // {
      //   id: 78453,
      //   firstName:'Hicham',
      //   lastName:'AHOUZI',
      //   email: "{firstName}.{lastName}@gmail.com"
      // },
      // {
      //   id: 7543,
      //   firstName:'Ihsan',
      //   lastName:'AHOUZI',
      //   email: "{firstName}.{lastName}@gmail.com"
      // },
      // {
      //   id: 67676,
      //   firstName: 'Iman',
      //   lastName: 'NAJIM',
      //   email: "{firstName}.{lastName}@gmail.com"
      // }
  ];
  // displayedColumns: string[] = ['id','firstName','lastName'];
  // dataSource = ELEMENT_DATA;
}
