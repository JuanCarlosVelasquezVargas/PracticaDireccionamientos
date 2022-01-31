import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-especial',
  templateUrl: './card-especial.component.html',
  styleUrls: ['./card-especial.component.scss']
})
export class CardEspecialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tittleCard: string = 'Titulo de mi Tarjeta desde el Componente';
  @Input() tittleCardPadre: string;
  @Input() cssClass: string;


}
