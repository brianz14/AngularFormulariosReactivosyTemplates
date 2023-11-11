import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioReactivoComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[FormularioReactivoComponent]
})
export class FormularioReactivoModule { }
