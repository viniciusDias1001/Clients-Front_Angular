import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesformsComponent } from './clientesforms/clientesforms.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {path : "clientes", component : LayoutComponent , canActivate: [AuthGuard], children : [
  {path : "forms", component : ClientesformsComponent },
  {path : "forms/:id", component : ClientesformsComponent },
  {path : "lista", component : ClientesListaComponent},
  {path : "" , redirectTo : "lista", pathMatch: "full"}
]}
  ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
