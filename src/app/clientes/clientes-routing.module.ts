import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesformsComponent } from './clientesforms/clientesforms.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';


const routes: Routes = [
  {path : "clientes-forms", component : ClientesformsComponent },
  {path : "clientes-lista", component : ClientesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
