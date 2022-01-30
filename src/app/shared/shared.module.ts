import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {AcumuladorComponent} from "./components/acumulador/acumulador.component";
import {CronometroComponent} from "./components/cronometro/cronometro.component";


@NgModule({
  declarations: [
    AcumuladorComponent,
    CronometroComponent
  ],
  exports: [
    CronometroComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
