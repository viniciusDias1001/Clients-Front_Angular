import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './Servico-prestadoForms/forms.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: "servico-prestado", component: LayoutComponent, children: [
  {path: "form", component: FormsComponent},
  {path: "list", component: ServicoPrestadoListComponent},
  {path: "" , redirectTo : "list", pathMatch: "full"}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
