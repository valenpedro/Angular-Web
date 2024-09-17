import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header', //Nombre del componente que esta el html
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class AppComponent {
  //modelo y controlador
  title = 'proyectoDogin';
}
