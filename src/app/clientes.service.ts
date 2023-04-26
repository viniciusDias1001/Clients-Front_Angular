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
    return this.httpClient.post<Cliente>("http://localhost:8080/api/clientes",cliente)

  }

  getClientes() : Cliente[] {
    let cliente =  new Cliente();
    cliente.id = 1;
    cliente.dataCadastro = "26/04/2023";
    cliente.nome = "Pedro";
    cliente.cpf = "44599753866";
      return  [cliente]
  }
}
