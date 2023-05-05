import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './Servico-prestadoForms/forms.component';

const routes: Routes = [
  {path: "servico-prestado-form", component: FormsComponent},
  {path: "servico-prestado-list", component: ServicoPrestadoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
