import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TipoCuentaComponent} from "./tipo-cuenta/tipo-cuenta.component";
import {MovimientosCuentaComponent} from "./movimientos-cuenta/movimientos-cuenta.component";
import {SaldosCuentaComponent} from "./saldos-cuenta/saldos-cuenta.component";

const routes: Routes = [
  {path: 'tipo-cuenta', component: TipoCuentaComponent},
  {path: 'movimientos-cuenta', component: MovimientosCuentaComponent},
  {path: 'saldos-cuenta', component: SaldosCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
