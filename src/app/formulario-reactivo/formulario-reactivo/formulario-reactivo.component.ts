import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent {

  proyectos:any=[]


  miFormulario: FormGroup = this.fb.group({
    proyecto: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    horas: this.fb.control(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(25),
    ]),
    tecnologias: this.fb.array([]),
  });

  tecnologia: FormControl = this.fb.control('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(3),
  ]);

  get tecnologias() {
    return this.miFormulario.get('tecnologias') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  validar() {
    return this.miFormulario.invalid && this.miFormulario.touched;
  }

  agregartecnologia() {
    if (this.tecnologia.invalid) {
      //marcar como tocado mostrar errror
      this.miFormulario.markAllAsTouched();
      return;
    }
    //encçviara a array tecnologias
    this.tecnologias.push(this.fb.control(this.tecnologia.value));
    console.log(this.tecnologia.value);

    this.tecnologia.reset();
  }

  AgregarProyecto() {

    if (this.miFormulario.invalid) {
      return;
    }
    
    this.proyectos.push(this.miFormulario.value)
    this.tecnologias.clear();
    }
}
