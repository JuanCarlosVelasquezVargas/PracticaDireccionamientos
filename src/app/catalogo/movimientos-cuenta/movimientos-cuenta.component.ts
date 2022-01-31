import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos-cuenta',
  templateUrl: './movimientos-cuenta.component.html',
  styleUrls: ['./movimientos-cuenta.component.scss']
})
export class MovimientosCuentaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickCard() {
    console.log('onClickCard')
  }

  logAcumulador: string[] = [];
  horaActual: Date;

  insertLogAcumulador(log: string) {
    console.log(log)
    this.logAcumulador.push(log);
  }

  mostrarHora(evento: any) {
    console.log(evento);
    this.horaActual = new Date();
    const {target} = evento;
    target.innerHTML = `Cambio la Hora - ${this.horaActual.getSeconds()}`;
  }

  mostrarConsola(phone: string) {
    console.log(phone);
  }


  listMarcadores: string[] = [];

  addMarcador(marcador: string) {
    this.listMarcadores.unshift(marcador);
  }
}

