import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesformsComponent } from './clientesforms/clientesforms.component';


const routes: Routes = [
  {path : "clientes-forms", component : ClientesformsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
