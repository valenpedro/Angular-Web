import { Propietario } from './propietario.model';

export interface Mascota {
  id: number;
  nombre: string;
  raza: string;
  edad: number;
  peso: number;
  enfermedad: string;
  fotoUrl: string;
  estado: string;
  propietario: Propietario;
}
