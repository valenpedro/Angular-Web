import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/mascota/listar/listar.component';
import { AgregarComponent } from './components/mascota/agregar/agregar.component';
import { EditarComponent } from './components/mascota/editar/editar.component';

const routes: Routes = [
  { path: 'mascotas', component: ListarComponent },
  { path: 'mascotas/agregar', component: AgregarComponent },
  { path: 'mascotas/editar/:id', component: EditarComponent },
  { path: '', redirectTo: 'mascotas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
