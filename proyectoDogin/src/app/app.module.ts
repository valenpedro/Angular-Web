import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgregarComponent } from './components/mascota/agregar/agregar.component';
import { ListarComponent } from './components/mascota/listar/listar.component';
import { EditarComponent } from './components/mascota/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    ListarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Añádelo aquí
    RouterModule.forRoot([
      { path: 'mascotas', component: ListarComponent },
      { path: 'mascotas/agregar', component: AgregarComponent },
      { path: 'mascotas/editar/:id', component: EditarComponent },
      { path: '', redirectTo: 'mascotas', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
