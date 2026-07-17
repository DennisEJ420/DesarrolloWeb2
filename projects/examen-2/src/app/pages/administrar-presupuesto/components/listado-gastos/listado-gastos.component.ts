import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresupuestoService } from '../../../../core/services/presupuesto.service';

@Component({
  selector: 'app-listado-gastos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-gastos.component.html'
})
export class ListadoGastosComponent {
  constructor(private presupuestoService: PresupuestoService) {}

  //refrescar la vista desde el servicio
  get presupuesto() {
    return this.presupuestoService.getPresupuesto();
  }

  get restante() {
    return this.presupuestoService.getRestante();
  }

  get listado() {
    return this.presupuestoService.getGastos();
  }

  get alertColorClass() {
    return this.presupuestoService.getClassRestante();
  }
}