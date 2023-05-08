import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  senha: string;
  errologin: boolean;
  cadastrando: boolean;

  constructor(){

  }

  onSubmmit(){
    console.log("User: " + this.username + "  " + "Senha: " + this.senha )
  }

  preparaCadastrar(event : any){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

}
