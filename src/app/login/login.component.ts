import { AuthService } from './../auth.service';
import { Usuario } from './usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  senha: string;
  cadastrando: boolean;
  usuario : Usuario;
  success : boolean;
  errors: String[];

  constructor(private AuthService : AuthService){
    this.usuario = new Usuario();



  }

  onSubmmit(){
      
  }

  preparaCadastrar(event : any){
    event.preventDefault();
    this.cadastrando = true;
  }

  cadastrar(){
 if(this.cadastrando = true){

          this.AuthService.salvar(this.usuario).subscribe(resposta => {
      resposta = this.usuario;
      this.success = true;
            this.errors = null;

    }, erroResponse => {
      this.success = null;
      this.errors = erroResponse.error.erros;
    })
    }


  }

  cancelaCadastro(){
    this.cadastrando = false;
    this.errors = null;
    this.success = null;
    this.usuario.username = null;
    this.usuario.senha = null;
  }

}
