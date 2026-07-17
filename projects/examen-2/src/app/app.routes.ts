import { Routes } from '@angular/router';
import { CrearPresupuestoComponent } from './pages/crear-presupuesto/crear-presupuesto.component';
import { AdministrarPresupuestoComponent } from './pages/administrar-presupuesto/administrar-presupuesto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'crear-presupuesto', pathMatch: 'full' },
  { path: 'crear-presupuesto', component: CrearPresupuestoComponent },
  { path: 'administrar-presupuesto', component: AdministrarPresupuestoComponent },
  { path: '**', redirectTo: 'crear-presupuesto' }
];