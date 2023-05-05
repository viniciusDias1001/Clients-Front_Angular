import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado} from './../servicoPrestado'
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/clientes';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{

  clientes : Cliente[];
  servico : ServicoPrestado;
  success: boolean = false;
  errors: String[];




  constructor(private clienteService : ClientesService, private servicoPrestadoService : ServicoPrestadoService){
    this.servico = new ServicoPrestado();

  }
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(resposta => {
        this.clientes = resposta;
    })
  }

  onSubmit(){
    this.servicoPrestadoService.salvar(this.servico).subscribe( resposta => {
      this.servico = resposta;
      this.success = true;
      this.errors = null;


    }, errorResponse => {
      this.errors = errorResponse.error.erros;

    })

  }


}
