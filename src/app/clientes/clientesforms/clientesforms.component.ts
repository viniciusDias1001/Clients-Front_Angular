import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from './../clientes';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { __values } from 'tslib';
import { Observable } from 'rxjs';
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
   id : number;





  constructor( private service : ClientesService,private router : Router, private activatedRoute : ActivatedRoute){
    this.cliente = new Cliente();
      }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;

    params.subscribe( urlParamns => {
      this.id = urlParamns['id'];
      if(this.id){
        this.service.getClienteById(this.id).subscribe(resposta => this.cliente = resposta, error => this.cliente = new Cliente())
      }
    })


  }

  onSubmit() {
    if(this.id){
      this.service.atualizarCliente(this.cliente).subscribe(resposta=>{
             this.success = true;
            this.errors = null;

      }, errorResponse => {
        this.errors = ["Erro ao atualizar Cliente"];

      })

    }else{
        this.service.salvar(this.cliente).subscribe(
      response => {

        this.cliente = response;
      },
      errorResponse => {
        this.errors = errorResponse.error.erros;
        this.success = false;
      }
    );
    }



  }







}
