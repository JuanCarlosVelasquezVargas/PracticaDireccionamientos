import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import {SharedModule} from "../shared/shared.module";
import { MovimientosCuentaComponent } from './movimientos-cuenta/movimientos-cuenta.component';


@NgModule({
  declarations: [
    TipoCuentaComponent,
    MovimientosCuentaComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    SharedModule
  ]
})
export class CatalogoModule { }
