import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';
import {Users} from '../Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private register: RegistrationService, private router: Router ) { }

// tslint:disable-next-line:new-parens
  private user: Users = new class implements Users {
    active: boolean;
    email: string;
    gender: string;
    id: number;
    mobileNo: number;
    name: string;
    password: string;
    role: string;
  };

  ngOnInit() {
  }
  createUser() {
    this.register.createUser(this.user).subscribe(data => {
      alert('User created successfully.');
      this.router.navigate(['login']);
    });
  }


}
