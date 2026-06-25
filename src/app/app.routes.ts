import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component'; //Se agrega la importación automáticamente
import { HeroPageComponent } from './pages/hero/hero-page.component'
import { AnimeComponent } from './pages/anime/anime-page.component';

export const routes: Routes = [
    {
        path: '', //se utiliza vacío sin espacio entre las comillas para que sea la ruta raiz
        component: CounterPageComponent //Con el path vacío, se carga la URL inicial (raiz)
    },
    {
        path: 'hero', //Se agrega el path para localHost:4200/hero
        component: HeroPageComponent //muestra el HeroPage con el path en la url
    },
    {
        path: 'anime',
        component: AnimeComponent
    }
];