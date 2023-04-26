import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  salvar(cliente : Cliente) : Observable<Cliente>{
    return this.httpClient.post<Cliente>("http://localhost:8080/api/clientes",cliente)

  }
  getClientes() : Cliente{
    let cliente: Cliente = new Cliente();
    cliente.nome = "pedro";
    cliente.cpf = "44599753866";
    return cliente;
  }
}
