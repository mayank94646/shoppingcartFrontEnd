import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from './Users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8081';

  public createUser(user) {
    return this.http.post<Users>(this.url + '/addUsers', user);
  }
}
