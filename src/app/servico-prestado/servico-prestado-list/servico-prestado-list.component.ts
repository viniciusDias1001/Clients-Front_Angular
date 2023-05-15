import { ServicoPrestado } from './../servicoPrestado';
import { ServicoPrestadoService } from './../../servico-prestado.service';
import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from './servicoPrestadoBuscar';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.css']
})
export class ServicoPrestadoListComponent implements OnInit {

  nome : string;
  mes: number;
  meses: number[]
  lista : ServicoPrestadoBusca[];
  menssagem: string;
  router: Router;
  constructor(private servicoPrestadoService: ServicoPrestadoService){

    this.meses = [1,2,3,4,5,6,7,8,9, 10,11,12]
  }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.lista)
   this.servicoPrestadoService.buscar(this.nome , this.mes).subscribe(resposta => {
    this.lista = resposta;
    if(this.lista.length <= 0){
      this.menssagem = "Nenhum Registro Encontrado"
    }

   })
  }


}
