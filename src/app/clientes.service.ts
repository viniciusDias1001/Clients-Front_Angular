import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  salvar(cliente : Cliente) : Observable<Cliente>{
    return this.httpClient.post<Cliente>("http://localhost:8080/api/clientes",cliente);

  }

  getClientes() : Observable <Cliente[]> {
    return this.httpClient.get<Cliente[]>("http://localhost:8080/api/clientes");
  }

  getClienteById(id:number){
    return this.httpClient.get<any>(`http://localhost:8080/api/clientes/${id}`);

  }

  atualizarCliente( cliente : Cliente) : Observable<any>{
    return this.httpClient.put<any>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  deleteCliente(cliente: Cliente) {
    return this.httpClient.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }
}
