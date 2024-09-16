// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ListarMascotaComponent } from './components/mascota/listar/listar.component';
import { AgregarMascotaComponent } from './components/mascota/agregar/agregar.component';
import { EditarMascotaComponent } from './components/mascota/editar/editar.component';

export const routes: Routes = [
  { path: 'mascotas', component: ListarMascotaComponent },
  { path: 'mascotas/agregar', component: AgregarMascotaComponent },
  { path: 'mascotas/editar/:id', component: EditarMascotaComponent },
  { path: '', redirectTo: 'mascotas', pathMatch: 'full' }
];
