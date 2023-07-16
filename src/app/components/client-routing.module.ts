import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/Login/Login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { HomeIndexComponent } from './layout/main/home-index/home-index.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'HomeIndex', component: HomeIndexComponent },
      { path: 'AboutUs', component: AboutUsComponent },
      { path: 'Shop', component: ShopComponent },
      { path: 'Cart', component: CartComponent },
      // { path: 'Detail/:_Id', component: Detail },
      { path: 'ContactUs', component: ContactUsComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
      { path: 'Checkout', component: CheckoutComponent },
    ]
  },
  /* This is a route that will be used when the user navigates to a route that does not exist. */
  { path: '404-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '404-not-found' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
