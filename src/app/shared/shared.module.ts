import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {AcumuladorComponent} from "./components/acumulador/acumulador.component";
import {CronometroComponent} from "./components/cronometro/cronometro.component";
import { CardComponent } from './components/card/card.component';
import {CardEspecialComponent} from "./components/card-especial/card-especial.component";
import {BtnLoadingDirective} from "./directives/btn-loading.directive";
import {BtnLoadingRenderDirective} from "./directives/btn-loading-render.directive";
import {BtnLoadingPropertyDirective} from "./directives/btn-loading-property.directive";

const componentes = [
  AcumuladorComponent,
  CronometroComponent,
  CardComponent,
  CardEspecialComponent,
  BtnLoadingDirective,
  BtnLoadingRenderDirective,
  BtnLoadingPropertyDirective
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
