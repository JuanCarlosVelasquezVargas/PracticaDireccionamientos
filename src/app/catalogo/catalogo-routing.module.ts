import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TipoCuentaComponent} from "./tipo-cuenta/tipo-cuenta.component";

const routes: Routes = [
  {path: 'tipo-cuenta', component: TipoCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
