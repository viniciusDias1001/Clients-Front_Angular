import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit{

  usuarioLogado : string

  constructor (private AuthService: AuthService, private Router: Router) {

  }

  sair(){
    this.AuthService.encerrarSessao();
    this.Router.navigate(["/login"])

  }
  ngOnInit(): void {
    this.usuarioLogado = this.AuthService.getUsuarioAutenticado();
  }



}
