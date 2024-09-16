import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { Mascota } from '../../models/mascota.model';

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar.component.html'
})
export class ListarMascotaComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }
}
