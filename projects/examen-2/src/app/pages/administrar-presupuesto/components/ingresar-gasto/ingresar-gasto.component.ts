import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PresupuestoService } from '../../../../core/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ingresar-gasto.component.html'
})
export class AppIngresarGastoComponent { 
  nombreGasto: string = '';
  cantidadGasto: number = 0;
  
  errorVacio: boolean = false;
  errorExcede: boolean = false;

  constructor(private presupuestoService: PresupuestoService) {}

  //procesa validaciones de campos y fondos suficientes antes de enviar al servicio
  agregar() {
    this.errorVacio = false;
    this.errorExcede = false;

    if (this.nombreGasto.trim() === '' || this.cantidadGasto <= 0) {
      this.errorVacio = true;
      return;
    }

    const guardadoConExito = this.presupuestoService.agregarGasto({
      nombre: this.nombreGasto,
      cantidad: this.cantidadGasto
    });

    if (!guardadoConExito) {
      this.errorExcede = true; 
    } else {
      this.nombreGasto = '';
      this.cantidadGasto = 0;
    }
  }
}