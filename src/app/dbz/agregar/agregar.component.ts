import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/Personaje';
import { PaginaPrincipalComponent } from '../pagina-principal/pagina-principal.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  @Input() dbzForm!: FormGroup;

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
    this.dbzForm;
  }

  resetForm = () => {
    this.dbzService.index = -1;
    this.dbzService.opcion = 'CREAR';
  }

  insertar = () => {
    const personaje = this.dbzForm.value;

    if (this.dbzService.opcion === 'CREAR') {
      this.dbzService.agregarPersonajes(personaje);
    } else {
      this.dbzService.editarPersonaje(this.dbzService.index, personaje);
    }
    this.dbzForm.reset();
    this.dbzService.opcion = 'CREAR';
    this.dbzService.index = -1;
  }
}

