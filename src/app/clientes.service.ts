import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from 'jquery';
import { environment } from '../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL : string = environment.apiURL
  constructor(private httpClient: HttpClient) { }

  salvar(cliente : Cliente) : Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.apiURL + "/api/clientes",cliente);

  }

  getClientes() : Observable <Cliente[]> {

    return this.httpClient.get<Cliente[]>(this.apiURL + "/api/clientes", );
  }

  getClienteById(id:number){
    return this.httpClient.get<any>(this.apiURL + `/api/clientes/${id}`);

  }

  atualizarCliente( cliente : Cliente) : Observable<any>{
    return this.httpClient.put<any>(this.apiURL + `/api/clientes/${cliente.id}`, cliente);
  }

  deleteCliente(cliente: Cliente) {
    return this.httpClient.delete<any>(this.apiURL + `/api/clientes/${cliente.id}`);
  }
}
