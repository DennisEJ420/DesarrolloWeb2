import { Injectable } from '@angular/core';

export interface Gasto {
  nombre: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  private presupuesto: number = 0;
  private restante: number = 0;
  private gastos: Gasto[] = [];

  //define presupuesto inicial y limpia registros previos
  setPresupuesto(monto: number) {
    this.presupuesto = monto;
    this.restante = monto;
    this.gastos = []; 
  }

  getPresupuesto() {
    return this.presupuesto;
  }

  getRestante() {
    return this.restante;
  }

  getGastos() {
    return this.gastos;
  }

  //descuenta el dinero disponible si el saldo lo permite
  agregarGasto(gasto: Gasto): boolean {
    if (gasto.cantidad <= this.restante) {
      this.gastos.push(gasto);
      //resta el nuevo gasto del saldo anterior
      this.restante -= gasto.cantidad; 
      return true; 
    }
    return false; 
  }

  //retorna clases de color de bootstrap según el límite de la tercera parte
  getClassRestante(): string {
    const unTercio = this.presupuesto / 3;
    
    if (this.restante < unTercio) {
      return 'bg-danger text-white'; //menor a un tercio (rojo)
    } else if (this.restante <= unTercio * 1.05) { 
      return 'bg-warning text-dark';  //la tercera parte (amarillo)
    }
    return 'bg-secondary-subtle text-dark'; //mas de un tercio
  }
}