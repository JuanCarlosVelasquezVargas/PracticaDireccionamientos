import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TransferenciasService} from "../../services/transferencias.service";

@Component({
  selector: 'app-transferencias-directas',
  templateUrl: './transferencias-directas.component.html',
  styleUrls: ['./transferencias-directas.component.scss']
})
export class TransferenciasDirectasComponent implements OnInit {


  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private _transferenciaServices: TransferenciasService) {
    this.form = this.fb.group({
      tipoCuenta: ['', Validators.required],
      numeroCuenta: ['', [Validators.required,Validators.maxLength(10), Validators.minLength(8)]],
      saldoContable: ['', Validators.required],
      saldoUsable: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {

  }


  guardarTransferencias() {
    //console.log(this.form.controls)

    const transferencia: any = {
      tipoCuenta: this.form.get('tipoCuenta')?.value,
      numeroCuenta: this.form.get('numeroCuenta')?.value,
      saldoContable: this.form.get('saldoContable')?.value,
      saldoUsable: this.form.get('saldoUsable')?.value
    }

    if(this.id == undefined){
      //Agregamos una Nueva Transferencia
      this._transferenciaServices.saveTransferencia(transferencia).subscribe(data => {
        this.toastr.success('Transferencia Correcta!', 'Aviso');
        //this.obtenerTransferencias();
        this.form.reset();
      },error => {
        this.toastr.error('El movimiento no se Pudo Modificar'+error,'Error');
      })
    } else {
      //Modificamos una Nueva Transferencia
      transferencia.id = this.id;
      this._transferenciaServices.updateTransferencia(this.id, transferencia).subscribe(data => {
        this.form.reset();
        this.accion='Agregar';
        this.id = undefined;
        //this.obtenerTransferencias();
        this.toastr.info('Transferencia Correcta!', 'Aviso');
      },error => {
        this.toastr.error('El movimiento no se Pudo Modificar'+error,'Error');
      })
    }


    //this.listaCuentas.push(transferencia);
    //console.log(transferencia);
  }

  eliminarMovimiento(id: number){
    //console.log(index);
    //this.listaCuentas.splice(index,1);
    this._transferenciaServices.deleteTrasnferencias(id).subscribe(data => {
      this.toastr.success('El movimiento fue eliminado con éxito','Aviso');
      //this.obtenerTransferencias();
    },error => {
      this.toastr.error('El movimiento no se Pudo Eliminar'+error,'Error');
    })
  }

  editarTransferencia(transferencia: any){
    this.accion='Editar';
    this.id=transferencia.id;
    this.form.patchValue({
      tipoCuenta: transferencia.tipoCuenta,
      numeroCuenta: transferencia.numeroCuenta,
      saldoContable: transferencia.saldoContable,
      saldoUsable: transferencia.saldoUsable
    })
  }

}
