import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductClass} from './ProductClass';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

// private url = '../assets/data/allProducts.json';

  private url = 'http://localhost:8081';
// private headers = new HttpHeaders({'Content-Type': 'application/json'});

  getAllProducts(): Observable<ProductClass[]> {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<ProductClass[]>(this.url + '/products', {headers});
  }

// tslint:disable-next-line:ban-types
  getOneProduct(id: Number): Observable<ProductClass> {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<ProductClass>(this.url + '/product-detail/' + id, {headers});
  }

  getProductsOfCategory(category: string): Observable<ProductClass[]> {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});

    return this.http.get<ProductClass[]>(this.url + '/productsFrom/' + category, {headers});
  }

  getProductsOfCategoryAndPrice(category: string, price1: number, price2: number): Observable<ProductClass[]> {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});

    return this.http.get<ProductClass[]>(this.url + '/products/' + category + '/' + price1 + '/' + price2, {headers});
  }

  getAllProductsOfPrice(price1: number, price2: number): Observable<ProductClass[]> {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<ProductClass[]>(this.url + '/products/' + price1 + '/' + price2, {headers});
  }

}

