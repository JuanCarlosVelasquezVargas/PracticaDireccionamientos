import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import {SharedModule} from "../shared/shared.module";
import { MovimientosCuentaComponent } from './movimientos-cuenta/movimientos-cuenta.component';
import { SaldosCuentaComponent } from './saldos-cuenta/saldos-cuenta.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';
import { TransferenciasDirectasComponent } from './transferencias-directas/transferencias-directas.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TipoCuentaComponent,
    MovimientosCuentaComponent,
    SaldosCuentaComponent,
    MisProductosComponent,
    TransferenciasDirectasComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CatalogoModule { }
