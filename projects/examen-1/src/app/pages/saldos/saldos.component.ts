import { Component } from '@angular/core';

@Component({
  selector: 'app-saldos',
  imports: [],
  templateUrl: './saldos.component.html',
  styleUrl: './saldos.component.css'
})

export class SaldosComponent {

  presupuesto = 7000;
  restante = 5000;
  gasto = 'Supermercado';
  monto = 2000;

}