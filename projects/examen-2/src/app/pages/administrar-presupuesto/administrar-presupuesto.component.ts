import { Component } from '@angular/core';
import { AppIngresarGastoComponent } from './components/ingresar-gasto/ingresar-gasto.component';
import { ListadoGastosComponent } from './components/listado-gastos/listado-gastos.component';

@Component({
  selector: 'app-administrar-presupuesto',
  standalone: true,
  imports: [AppIngresarGastoComponent, ListadoGastosComponent],
  templateUrl: './administrar-presupuesto.component.html',
  styles: [`.bg-gradient-custom { background: linear-gradient(135deg, #437a65, #1d4350); min-height: 85vh; }`]
})
export class AdministrarPresupuestoComponent {

}