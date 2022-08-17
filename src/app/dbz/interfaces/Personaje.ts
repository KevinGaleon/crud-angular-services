export interface Personaje {
  _id: string;
  codigo: number;
  nombre: string;
  ciudad: string;
  poder: number;
}

export interface PersonajeResponse {
  message: string,
  data: Personaje[],
}