import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: 'login', component: LoginComponent, },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  //     { path: 'productList', component: ProductListComponent, canActivate: [AuthGuard] },
  //     { path: 'create-product', component: FormProductComponent, canActivate: [AuthGuard] },
  //     { path: 'product-update/:_id', component: FormProductComponent },
  //     { path: 'userList', component: UserListComponent, canActivate: [AuthGuard] },
  //   ]
  // },
  // /* This is a route that will be used when the user navigates to a route that does not exist. */
  // { path: '404-not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: '404-not-found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
