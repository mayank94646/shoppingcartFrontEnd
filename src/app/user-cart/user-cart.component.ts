import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  constructor(private cart: CartService, private router: Router) { }
  private prod;
  private total = 0;
  ngOnInit() {
    this.cart.showMyCart().subscribe(data => {
      this.prod = data;
      console.log(this.prod.length);
      let total = 0;
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < this.prod.length; i++) {
        total = total + this.prod[i].products.price * this.prod[i].quantity;
      }
      console.log(this.total);
      this.total = total;
    });
  }
  removeOne(id: any) {
    this.cart.removeOne(id).subscribe( data1 => {
      this.cart.showMyCart().subscribe(data => {
        this.prod = data;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.prod.length; i++) {
          console.log(this.prod[i].price);
          total = total + this.prod[i].products.price * this.prod[i].quantity;
        }
        this.total = total;
      });
    });
  }
  navTOProductDetail(productId: any) {
    this.router.navigate(['productdetail' , productId ]);
  }
  addOne(id: any) {
    console.log(id);
    this.cart.addToCart(id).subscribe(data1 => {
      this.cart.showMyCart().subscribe(data => {
        this.prod = data;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.prod.length; i++) {
          total = total + this.prod[i].products.price * this.prod[i].quantity;
        }
        this.total = total;
      });
    });
  }
  removeProduct(id: any) {
    this.cart.removeWholeProduct(id).subscribe(data1 => {
      this.cart.showMyCart().subscribe(data => {
        this.prod = data;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.prod.length; i++) {
          total = total + this.prod[i].products.price * this.prod[i].quantity;
        }
        this.total = total;
      });
    });
  }
  checkOut() {
    this.router.navigate(['orderHistory']);
  }
}
