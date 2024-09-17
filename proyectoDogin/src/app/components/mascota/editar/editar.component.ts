import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../../../services/mascota.service';
import { Mascota } from '../../../models/mascota.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  mascota: Mascota | undefined;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mascotaService.getMascota(id).subscribe(data => {
      this.mascota = data;
    });
  }

  editarMascota(): void {
    if (this.mascota) {
      this.mascotaService.updateMascota(this.mascota);
      this.router.navigate(['/mascotas']);  // Navegar de nuevo al listado
    }
  }
}
