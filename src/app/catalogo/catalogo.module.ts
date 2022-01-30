import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import { CronometroComponent } from './cronometro/cronometro.component';


@NgModule({
  declarations: [
    TipoCuentaComponent,
    CronometroComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
