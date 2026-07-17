import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../core/services/presupuesto.service';

@Component({
  selector: 'app-crear-presupuesto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-presupuesto.component.html',
  styles: [`.bg-gradient-custom { background: linear-gradient(135deg, #437a65, #1d4350); min-height: 85vh; }`]
})
export class CrearPresupuestoComponent {
  monto: number = 0;
  error: boolean = false; //controla la alerta en el HTML

  constructor(private presupuestoService: PresupuestoService, private router: Router) {}

  //valida monto y guarda
  aceptarPresupuesto() {
    if (this.monto <= 0) {
      this.error = true;
    } else {
      this.error = false;
      this.presupuestoService.setPresupuesto(this.monto); 
      this.router.navigate(['/administrar-presupuesto']); 
    }
  }
}