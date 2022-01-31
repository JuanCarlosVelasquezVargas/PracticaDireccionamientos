import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {AcumuladorComponent} from "./components/acumulador/acumulador.component";
import {CronometroComponent} from "./components/cronometro/cronometro.component";
import { CardComponent } from './components/card/card.component';
import {CardEspecialComponent} from "./components/card-especial/card-especial.component";

const componentes = [
  AcumuladorComponent,
  CronometroComponent,
  CardComponent,
  CardEspecialComponent
]

@NgModule({
  declarations: componentes,
  exports: componentes,
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
