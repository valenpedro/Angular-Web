import { Mascota } from './mascota.model';
import { Veterinario } from './veterinario.model';
import { Medicamento } from './medicamento.model';

export interface Tratamiento {
  id: number;
  fecha: Date;
  mascota: Mascota;
  veterinario: Veterinario;
  medicamento: Medicamento;
}
