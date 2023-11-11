import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css'],
})
export class FormularioTemplateComponent {
  tecnologias: Array<string> = [];

  proyectos:any=[]
  
  @ViewChild('miProyecto')
  miProyectoC!: NgForm;

  estadoInicial={
    proyecto:"",
    horas:0,
    tecnologia:""
  }


  AgregarTec() {
    if (this.miProyectoC.controls['tecnologia'].invalid) {
      return;
    } 
    this.tecnologias.push(this.miProyectoC.controls['tecnologia'].value);
    this.miProyectoC.resetForm({
      ...this.miProyectoC.value,
      tecnologia: "",
    })
  }

  agregar() {
    if (this.miProyectoC.invalid) {
      return;
    } 
    this.proyectos.push({
      proyectos: this.miProyectoC.controls['proyecto'].value,
      horas: this.miProyectoC.controls['horas'].value,
      tecnologias:this.tecnologias
    })
    this.miProyectoC.resetForm()
    this.tecnologias=[]
    console.log(this.proyectos)
  }
}
