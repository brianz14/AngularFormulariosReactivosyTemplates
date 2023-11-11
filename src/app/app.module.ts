import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioReactivoModule } from './formulario-reactivo/formulario-reactivo.module';
import { FormularioTemplateModule } from './formulario-template/formulario-template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormularioTemplateModule,
    FormularioReactivoModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
