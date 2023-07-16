import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CssJsUserDirective } from '../core/directive/css_js-user.directive';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from "./layout/main/main.component";
import { BrandCarouseComponent } from "./layout/main/brand-carouse/brand-carouse.component";
import { SlidersComponent } from "./layout/main/sliders/sliders.component";
import { LayoutComponent } from "./layout/layout.component";
import { ClientRoutingModule } from "./client-routing.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { HomeIndexComponent } from "./layout/main/home-index/home-index.component";
@NgModule({
  declarations: [
    CssJsUserDirective,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BrandCarouseComponent,
    SlidersComponent,
    LayoutComponent,
    HomeIndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
