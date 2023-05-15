import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';

import { Injectable } from '@angular/core';
import { environment } from '../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL : string = environment.apiURL
  constructor(private HttpClient : HttpClient)

  { }

  salvar(usuario : Usuario) : Observable<Usuario>{
    return this.HttpClient.post<Usuario>(this.apiURL + "/api/usuarios" ,usuario)
  }
}
