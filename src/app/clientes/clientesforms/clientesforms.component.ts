import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from './../clientes';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { error } from 'jquery';

@Component({
  selector: 'app-clientesforms',
  templateUrl: './clientesforms.component.html',
  styleUrls: ['./clientesforms.component.css']
})
export class ClientesformsComponent implements OnInit{

  cliente : Cliente;
  success: boolean = false;
   errors: String[];





  constructor( private service : ClientesService){
    this.cliente = new Cliente();

      }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.salvar(this.cliente).subscribe(
      response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
      },
      errorResponse => {
        this.errors = errorResponse.error.erros;
        this.success = false;
      }
    );


  }







}
