import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  private product;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartService.showOrderHistory().subscribe(data => this.product = data);
  }

  checkDetails(id) {
    this.router.navigate(['product-detail', id]);
  }
}
