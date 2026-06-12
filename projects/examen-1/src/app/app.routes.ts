import { Routes } from '@angular/router';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { AdministrarComponent } from './pages/administrar/administrar.component';
import { SaldosComponent } from './pages/saldos/saldos.component';

export const routes: Routes = [

  {
    path: 'agregar', 
    component: AgregarComponent
  },

  {
    path: 'administrar',
    component: AdministrarComponent
  },

  {
    path: 'saldos',
    component: SaldosComponent
  },

  {
    path: '',
    redirectTo: 'agregar', //la página inicial se redirecciona automáticamente a "agregar" para mostrar por defecto
    pathMatch: 'full'
  }

];