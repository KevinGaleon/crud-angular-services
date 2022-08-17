import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje, PersonajeResponse } from '../interfaces/Personaje';
import { DBZ_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  opcion: string = 'CREAR';
  _id: string = '';
  personajes: Personaje[] = [];

  constructor(private http: HttpClient) { }

  cargarData = () => {
    this.getLista().subscribe(response => {
      this.personajes = response.data;
    });
  };

  public getLista(): Observable<PersonajeResponse> {
    return this.http.get<PersonajeResponse>(DBZ_URL);
  }

  public getPersonaje(_id: string): Observable<PersonajeResponse>{
    return this.http.get<PersonajeResponse>(DBZ_URL + _id)
  }

  public save(personaje: Personaje):Observable<PersonajeResponse>{
    return this.http.post<PersonajeResponse>(DBZ_URL, personaje);
  }

  public update(_id: string, personaje:Personaje):Observable<PersonajeResponse>{
    return this.http.put<PersonajeResponse>(DBZ_URL + _id, personaje)
  }

  public delete(_id:string):Observable<PersonajeResponse>{
    return this.http.delete<PersonajeResponse>(DBZ_URL + _id);
  }
}