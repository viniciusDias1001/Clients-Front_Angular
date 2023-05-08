import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { ClientesformsComponent } from './clientes/clientesforms/clientesforms.component';
import { ServicoPrestadoListComponent } from './servico-prestado/servico-prestado-list/servico-prestado-list.component';
import { FormsComponent } from './servico-prestado/Servico-prestadoForms/forms.component';


const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path: "" , component : LayoutComponent, children: [
     { path : "home", component : HomeComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
