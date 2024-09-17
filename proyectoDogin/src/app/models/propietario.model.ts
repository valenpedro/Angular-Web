import { Mascota } from './mascota.model';

export interface Propietario {
  id: number;
  cedula: string;
  nombre: string;
  correo: string;
  celular: string;
  contrasena: string;
  mascotas?: Mascota[];
}
