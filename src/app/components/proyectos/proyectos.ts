import { Component, inject } from '@angular/core';
import { ProyectoService } from './proyectos.service';

@Component({
  imports: [],
  selector: 'app-proyectos',
  styleUrl: './proyectos.css',
  templateUrl: './proyectos.html',
})
export class Proyectos {
  proyectoService= inject(ProyectoService)
}
