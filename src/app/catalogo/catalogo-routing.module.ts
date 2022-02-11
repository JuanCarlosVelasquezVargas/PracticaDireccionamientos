import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TipoCuentaComponent} from "./tipo-cuenta/tipo-cuenta.component";
import {MovimientosCuentaComponent} from "./movimientos-cuenta/movimientos-cuenta.component";
import {SaldosCuentaComponent} from "./saldos-cuenta/saldos-cuenta.component";
import {MisProductosComponent} from "./mis-productos/mis-productos.component";
import {TransferenciasDirectasComponent} from "./transferencias-directas/transferencias-directas.component";

const routes: Routes = [
  {path: 'tipo-cuenta', component: TipoCuentaComponent},
  {path: 'movimientos-cuenta', component: MovimientosCuentaComponent},
  {path: 'saldos-cuenta', component: SaldosCuentaComponent},
  {path: 'mis-productos', component: MisProductosComponent},
  {path: 'transferencias-directas', component: TransferenciasDirectasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
