import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mascota } from '../models/mascota.model';  // Importa el modelo de Mascota

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private mascotas: Mascota[] = [
    {
      id: 1,
      nombre: 'Max',
      raza: 'Golden Retriever',
      edad: 5,
      peso: 25.5,
      enfermedad: 'Displasia de cadera',
      fotoUrl: 'https://example.com/perro1.jpg',
      estado: 'Activo',
      propietario: { id: 1, cedula: '123456789', nombre: 'Luis', correo: 'luis@example.com', celular: '3001234567', contrasena: '1234' }
    },
    {
      id: 2,
      nombre: 'Luna',
      raza: 'Siames',
      edad: 2,
      peso: 3.5,
      enfermedad: 'Alergia',
      fotoUrl: 'https://example.com/gato1.jpg',
      estado: 'Activo',
      propietario: { id: 2, cedula: '987654321', nombre: 'Ana', correo: 'ana@example.com', celular: '3007654321', contrasena: '1234' }
    }
  ];

  constructor() { }

  // Obtener todas las mascotas
  getMascotas(): Observable<Mascota[]> {
    return of(this.mascotas);  // Devuelve la base de datos quemada
  }

  // Obtener una mascota por ID
  getMascota(id: number): Observable<Mascota> {
    const mascota = this.mascotas.find(m => m.id === id);
    return of(mascota!);
  }

  // Agregar una nueva mascota
  addMascota(mascota: Mascota): void {
    mascota.id = this.mascotas.length + 1;
    this.mascotas.push(mascota);
  }

  // Actualizar una mascota existente
  updateMascota(mascota: Mascota): void {
    const index = this.mascotas.findIndex(m => m.id === mascota.id);
    if (index > -1) {
      this.mascotas[index] = mascota;
    }
  }

  // Eliminar una mascota
  deleteMascota(id: number): void {
    this.mascotas = this.mascotas.filter(m => m.id !== id);
  }
}
