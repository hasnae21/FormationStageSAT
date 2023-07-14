import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjetDirective';

  success_msg = false;


  superPower ='SpiderMan';
  tax = 10;

styleProp = 'purple';
textColor = 'blue';

styleC1sProp = 'green';
conditionCIsProp ='c7' ;


  contacts = [
    {
      'id' : 12342,
      'Name' : "Hasnae1",
      'Email' : "ahouzihasnae@gmail.com"
    },
    {
      'id' : 2356432,
      'Name' : "Hasnae2",
      'Email' : "ahouzihasnae@gmail.com"
    },
    {
      'id' : 3654,
      'Name' : "Hasnae3",
      'Email' : "ahouzihasnae@gmail.com"
    },
    {
      'id' : 456743,
      'Name' : "Hasnae4",
      'Email' : "ahouzihasnae@gmail.com"
    },
    {
      'id' : 18453,
      'Name' : "Hasnae5",
      'Email' : "ahouzihasnae@gmail.com"
    },
    {
      'id' : 17645,
      'Name' : "Hasnae6",
      'Email' : "ahouzihasnae@gmail.com"
    },
    {
      'id' : 18754,
      'Name' : "Hasnae7",
      'Email' : "ahouzihasnae@gmail.com"
    }
  ]

}
