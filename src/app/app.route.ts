import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {SignupComponent} from './signup/signup.component';
import {ProductListComponent} from './product-list/product-list.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthguardService} from './authguard.service';


export const MAIN_ROUTES: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full'},
  { path : 'home', component: HomePageComponent },
  { path : 'sign_up', component: SignupComponent },
  { path : 'login', component: LoginComponent },
  { path : 'logout', component: LogoutComponent, canActivate: [AuthguardService]},
  { path : 'cart', component: UserCartComponent, canActivate: [AuthguardService]},
  { path : 'products/:category', component: ProductListComponent },
  { path : 'product-detail/:id', component: ProductDetailsComponent },
  { path : 'products/:category/price1/price2', component: ProductListComponent },
];
