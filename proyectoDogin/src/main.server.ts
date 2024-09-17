import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/mascota/listar/listar.component';
import { AgregarComponent } from './components/mascota/agregar/agregar.component';
import { EditarComponent } from './components/mascota/editar/editar.component';

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
