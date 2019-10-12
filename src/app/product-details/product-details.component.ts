import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private productId;
  private products = [];
  private product;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.productId = id;
    });

    this.productService.getOneProduct(this.productId).subscribe(data => this.product = data);
  }

  /*addThisProductToCart(id) {
    this.cartService.addToCart(id).subscribe((data) =>
      console.log(data));
    alert('Product added to cart.');
  }*/
}
