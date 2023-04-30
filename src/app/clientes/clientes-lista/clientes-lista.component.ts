import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from './../clientes';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit{

  clientes: Cliente[] = []
  clienteSelecionado : Cliente;
  mensagemS : string;
   mensagemN : String;



  constructor(private clientesService : ClientesService, private router : Router) {


   }
  ngOnInit(): void {
   this.clientesService.getClientes().subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro(){
    this.router.navigate(["/clientes-forms"])
  }


  preparaDelecao(cliente : Cliente){
    this.clienteSelecionado = cliente;
  }

  deletar(){
    this.clientesService.deleteCliente(this.clienteSelecionado).subscribe(resposta => {
     this.mensagemS = "Cliente deletado com sucesso";
     this.ngOnInit();
    }, erro => {this.mensagemN = "Algo deu errado na ação de deletar cliente"});
  }

  cancelar(){
    this.router.navigate(["/clientes-lista"])
  }

}
