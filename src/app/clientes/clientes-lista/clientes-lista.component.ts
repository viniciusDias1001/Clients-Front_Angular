import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from './../clientes';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit{

  clientes: Cliente[] = []



  constructor(private clientesService : ClientesService, private router : Router) {


   }
  ngOnInit(): void {
   this.clientesService.getClientes().subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro(){
    this.router.navigate(["/clientes-forms"])
  }

  

}
