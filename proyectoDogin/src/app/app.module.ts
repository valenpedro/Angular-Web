import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Asegúrate de que FormsModule está importado
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './components/mascota/agregar/agregar.component';
import { EditarComponent } from './components/mascota/editar/editar.component';
import { ListarComponent } from './components/mascota/listar/listar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    EditarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Importa FormsModule aquí para usar ngModel
    RouterModule  // Asegúrate de que RouterModule está importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
