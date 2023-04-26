import { ClientesformsComponent } from './clientesforms/clientesforms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';



@NgModule({
  declarations: [
    ClientesformsComponent,
    ClientesListaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    RouterModule,
    FormsModule

  ],
  exports: [
    ClientesformsComponent,
    ClientesListaComponent

  ]
})
export class ClientesModule { }
