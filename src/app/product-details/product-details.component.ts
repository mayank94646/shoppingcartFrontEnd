import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
   userId;
   info = [
     {
       name : 'Hrx shoes',
       price : '2000',
       type : 'Sneakers',
       details: 'Special Technologies: \n' +
         'High quality synthetic PU upper \n' +
         ' Cushion collar provides ankle support. \n' +
         ' Soft EVA/ latex on the bottom of the insole that gives extra cushioning to the hee',
       imgsrc : '../../assets/images/gshoe1.jpg',
     }
   ];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params.id;
    });
  }

}
