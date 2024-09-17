import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';  // Cambiamos la ruta a './app/app.component'
import { ListarComponent } from './app/components/mascota/listar/listar.component';  // Ruta corregida
import { AgregarComponent } from './app/components/mascota/agregar/agregar.component';  // Ruta corregida
import { EditarComponent } from './app/components/mascota/editar/editar.component';  // Ruta corregida

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'mascotas', component: ListarComponent },
      { path: 'mascotas/agregar', component: AgregarComponent },
      { path: 'mascotas/editar/:id', component: EditarComponent },
      { path: '', redirectTo: 'mascotas', pathMatch: 'full' }
    ])
  ]
});
