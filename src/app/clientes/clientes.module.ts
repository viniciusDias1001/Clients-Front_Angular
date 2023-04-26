import { ClientesformsComponent } from './clientesforms/clientesforms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientesformsComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    RouterModule,
    FormsModule

  ],
  exports: [
    ClientesformsComponent,

  ]
})
export class ClientesModule { }
