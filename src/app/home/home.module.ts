import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PagePrincipalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
