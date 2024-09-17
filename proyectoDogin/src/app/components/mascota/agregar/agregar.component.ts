import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaService } from "../../../services/mascota.service";
import { Mascota } from "../../../models/mascota.model";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  mascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    estado: '',
    propietario: { id: 0, cedula: '', nombre: '', correo: '', celular: '', contrasena: '' }
  };

  constructor(private mascotaService: MascotaService, private router: Router) {}

  agregarMascota(): void {
    this.mascotaService.addMascota(this.mascota);
    this.router.navigate(['/mascotas']);  // Navegar de nuevo al listado
  }
}
