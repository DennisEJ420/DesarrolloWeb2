import {Component, signal} from '@angular/core';

@Component ({
selector: 'app-hero-page',

//importa el html y css del hero
templateUrl: './hero-page.component.html',
styleUrl: './hero-page.component.css'
})

export class HeroPageComponent {
    name = 'DeadPool';
    age = 33;

    heroDescription = signal(
        `Su nombre es ${this.name} y tiene ${this.age} años`
    );

    getHeroDescription() {
        return this.heroDescription();
    }

    //se utiliza el método privado para evitar harcodear la descripcion varias veces
    private actualizaHeroDescription() { 
        this.heroDescription.set(
            `Su nombre es ${this.name} y tiene ${this.age} años`
        );
    }

    cambiarHero() {
        this.name = 'Wolverine';
        this.actualizaHeroDescription();
    }

    cambiarEdad () {
        this.age = 45;
        this.actualizaHeroDescription();
    }

    reset() {
        this.name = 'DeadPool';
        this.age = 33;
        this.actualizaHeroDescription();
    }

}
