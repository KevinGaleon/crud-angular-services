import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  @Output() personajeToModify = new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService) { }

  get personajes () {
    return this.dbzService.personajes;
  };

  ngOnInit(): void {
    this.dbzService.cargarData();
  }

  eliminar = (_id: string) => {
    this.dbzService.delete(_id).subscribe(response => {
      this.dbzService.cargarData();
      this.dbzService.opcion = 'CREAR';
    });
  };

  setForm = (personaje: Personaje) => {
    this.personajeToModify.emit(personaje);
    this.dbzService._id = personaje._id;
  };
}