import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CssJsAdminDirective } from '../core/directive/css_js-admin.directive';
import { HeaderComponent } from './layout/header/header.component';
import { ModalLeftComponent } from "./layout/modal-left/modal-left.component";
import { ModalRightComponent } from "./layout/modal-right/modal-right.component";
import { PageContainerComponent } from "./layout/page-container/page-container.component";
import { SideNavComponent } from "./layout/side-nav/side-nav.component";
import { AdminLayoutComponent } from "./layout/admin-layout.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
@NgModule({
  declarations: [
    CssJsAdminDirective,
    HeaderComponent,
    ModalLeftComponent,
    ModalRightComponent,
    PageContainerComponent,
    SideNavComponent,
    AdminLayoutComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
