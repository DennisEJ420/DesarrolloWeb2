import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component'; //Se agrega la importación automáticamente

export const routes: Routes = [
    {
        path: '', //se utiliza vacío sin espacio entre las comillas para que sea la ruta raiz
        component: CounterPageComponent //Con el path vacío, se carga la URL inicial (raiz)
    }
];