import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private listaPersonajes: Personaje[] = [
    {
      codigo: 1,
      nombre: 'Goku',
      ciudad: 'tokyo',
      poder: 50,
    },
    {
      codigo: 2,
      nombre: 'Vegetta',
      ciudad: 'vegitta city',
      poder: 40,
    },
    {
      codigo: 3,
      nombre: 'Broly',
      ciudad: 'vegitta city',
      poder: 80,
    },
  ];

  index = -1;
  opcion = 'CREAR';

  get getLista(): Personaje[]{
    return [...this.listaPersonajes];
  }

  agregarPersonajes = (personaje: Personaje) => {
    this.listaPersonajes.push(personaje);
  };

  eliminarPersonaje = (index: number) => {
    this.listaPersonajes.splice(index, 1);
  };

  editarPersonaje = (index: number, nuevoPersonaje: Personaje) => {
    this.listaPersonajes[index] = nuevoPersonaje;
  }

  constructor() { }
}
