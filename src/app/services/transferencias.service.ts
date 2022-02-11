import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {
  private myAppUrl = 'https://localhost:44327/';
  private myApiUrl = 'api/Transferencias/';

  constructor(private http: HttpClient) { }

  getListTransferencias(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteTrasnferencias(id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveTransferencia(transferencia: any): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, transferencia);
  }

  updateTransferencia(id: number, transferencia: any): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, transferencia);
  }

}
