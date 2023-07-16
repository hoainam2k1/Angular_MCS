import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminLayoutComponent } from './admin-components/layout/admin-layout.component';
const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'Admin', component: AdminLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
