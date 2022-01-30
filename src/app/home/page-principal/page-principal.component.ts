import {Component, OnInit, ViewChild} from '@angular/core';
import {CronometroComponent} from "../../shared/components/cronometro/cronometro.component";

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.scss']
})
export class PagePrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  timeStamps: number[] = [];

  aniadirVuelta($event: number) {
    this.timeStamps.unshift($event);
  }

  limpiarVueltas() {
    this.timeStamps = [];
  }

  //@ViewChild(CronometroComponent) primerCrono: CronometroComponent
  @ViewChild('cronometroPrimero') primerCrono: CronometroComponent
  @ViewChild('cronometroSegundo') segundoCrono: CronometroComponent

  iniciarCronometro(){
    this.segundoCrono.play()
  }

  iniciarTodosCronometro(){
    this.primerCrono.play()
    this.segundoCrono.play()
  }

}
