import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  photoId = 0;
  productId = 0;

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);

      const interValue = params;

      this.photoId = interValue['photoId'];
      this.productId = interValue['productId'];
    });
  }
  
  ngOnInit():void{
  }
}
