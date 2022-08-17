import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { DbzService } from './services/dbz.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonajesComponent,
    AgregarComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PaginaPrincipalComponent,
  ],
})
export class DbzModule { }
