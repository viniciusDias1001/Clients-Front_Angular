import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { FormsComponent } from './Servico-prestadoForms/forms.component';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsComponent,
    ServicoPrestadoListComponent
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ServicoPrestadoListComponent,
    FormsComponent

  ]
})
export class ServicoPrestadoModule { }
