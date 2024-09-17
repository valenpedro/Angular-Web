import { Component, OnInit } from '@angular/core';
import { MascotaService } from "../../../services/mascota.service";
import { Mascota } from "../../../models/mascota.model";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }

  deleteMascota(id: number): void {
    this.mascotaService.deleteMascota(id);
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data;  // Refresca el listado tras eliminar
    });
  }
}
