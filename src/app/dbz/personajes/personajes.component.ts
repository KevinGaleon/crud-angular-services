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

  ngOnInit(): void {
  }

  get personajes () {
    return this.dbzService.getLista;
  }

  eliminar = (index: number) => {
    this.dbzService.eliminarPersonaje(index);
  };

  setForm = (personaje: Personaje, index: number) => {
    this.dbzService.index = index;
    this.personajeToModify.emit(personaje);
  };
}