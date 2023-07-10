import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  color = ' ';
  size = 'M';
  priceFrom = 0;
  priceTo = 0;

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);

      this.color = params['color'] ;
      this.size = params['size'] ;
      this.priceFrom = params['priceFrom'] ;
      this.priceTo = params['priceTo'] ;
    });
  }
  ngOnInit():void{

  }

}
