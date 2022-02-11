import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TransferenciasService} from "../../services/transferencias.service";

@Component({
  selector: 'app-saldos-cuenta',
  templateUrl: './saldos-cuenta.component.html',
  styleUrls: ['./saldos-cuenta.component.scss']
})
export class SaldosCuentaComponent implements OnInit {

  listaCuentas: any[] = [];

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private _transferenciaServices: TransferenciasService) { }

  ngOnInit(): void {
    this.obtenerTransferencias();
  }

  obtenerTransferencias(){
    this._transferenciaServices.getListTransferencias().subscribe(data => {
      //console.log(data);
      this.listaCuentas = data;
    },error => {
      console.log(error);
    })
  }

}
