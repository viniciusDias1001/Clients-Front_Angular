import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';

import { Injectable } from '@angular/core';
import { environment } from '../environments/environments'
import {JwtHelperService} from "@auth0/angular-jwt"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL : string = environment.apiURL;
  tokenUrl : string = environment.apiURL + environment.obterToeknUrl;

  clientId : string = environment.clientId;
  clientSecret : string = environment.clientSecret;
  JwtHelperService: JwtHelperService = new JwtHelperService;
  constructor(private HttpClient : HttpClient)

  { }

  obterToken(){
    const tokenString = localStorage.getItem('access_token');

    if(tokenString){
      const token = JSON.parse(tokenString).access_token;
      return token;
    }
    return null;
  }

  isAuthentication() : boolean {
    const token = this.obterToken();
    if(token){
      const estaExpirado = this.JwtHelperService.isTokenExpired(token);
      return !estaExpirado;
    }
    return false;


  }

  encerrarSessao(){
    localStorage.removeItem('access_token');
  }
  getUsuarioAutenticado(){
    const token = this.obterToken();
    if(token){
    const user =  this.JwtHelperService.decodeToken(token).user_name
    return user
    }
    return null
  }

  salvar(usuario : Usuario) : Observable<Usuario>{
    return this.HttpClient.post<Usuario>(this.apiURL + "/api/usuarios" ,usuario)
  }

  tentarLogar(username: string , password : string) : Observable<any>{
     const parms = new HttpParams().set("username", username).set("password",password).set("grant_type","password");

     const headers ={
      "Authorization" : 'Basic.' + btoa(`${this.clientId}:${this.clientSecret}`),
      "Content-Type" : "application/x-www-form-urlencoded"
     }

    return this.HttpClient.post(this.tokenUrl, parms.toString(), {headers});
  }
}
