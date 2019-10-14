import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsService} from '../products.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute, private cartService: CartService) { }

  public products;
  private category;
  private productId;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const cat = params.get('category');
      this.category = cat;
      if (this.category === 'all') {
        this.productService.getAllProducts().subscribe(data => this.products = data);
      } else {
        this.productService.getProductsOfCategory(this.category).subscribe(data => this.products = data);
      }
    });
  }
  seeDetails(product) {
    this.router.navigate(['product-detail', product.productId]);
  }
  goTo(category) {
    this.router.navigate(['products', category]);
  }
  filterByPrice(price1, price2) {
    if (this.category === 'all') {
      this.productService.getAllProductsOfPrice(price1, price2).subscribe(data => this.products = data);
    } else {
      this.productService.getProductsOfCategoryAndPrice(this.category, price1, price2).subscribe(data => this.products = data);
    }
  }
  addThisProductToCart(product) {
    this.cartService.addToCart(product.productId).subscribe((data) =>
      console.log(data));
    alert('Product added to cart.');
  }
}
