import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments'
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-list/servicoPrestadoBuscar';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL : string = environment.apiURL + "/api/servico-prestado"
  constructor(private httpClient: HttpClient ) {


  }

  salvar(servicoPrestado : ServicoPrestado) : Observable<ServicoPrestado>{
    return this.httpClient.post<ServicoPrestado>(this.apiURL ,servicoPrestado);
  }

  buscar(nome : string , mes :number) : Observable<ServicoPrestadoBusca[]>{
    const httpParams = new HttpParams().set("nome", nome).set("mes", mes ? mes.toString() : "");

    console.log(httpParams)



    const url= this.apiURL + "?" + httpParams.toString();
    console.log(url);
    return this.httpClient.get<any>(url)
  }
}
