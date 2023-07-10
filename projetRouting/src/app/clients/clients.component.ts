import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{

  clientList = [
    { clientId: 10, firstName: 'Raj', lastName: 'Srini'},
    { clientId: 11, firstName: 'Ryaj', lastName: 'ytjh'},
    { clientId: 12, firstName: 'Rtaj', lastName: 'jtyj'},
    { clientId: 13, firstName: 'Reaj', lastName: 'tyujn'},
    { clientId: 14, firstName: 'Ruaj', lastName: 'ytnjty'},
    { clientId: 15, firstName: 'Reyaj', lastName: 'tyhty'},
    { clientId: 16, firstName: 'Ryhnaj', lastName: 'tyr5yh'}
  ];

  ngOnInit():void{
  }
}
