import { Component, signal, computed } from '@angular/core';

@Component({
    // importa el html y css del hero
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css'
})

export class HeroPageComponent {

    name = signal('DeadPool');
    age = signal(33);

    heroDescription = computed(() => //cambia la descripcion automáticamente cuando nombre y edad cambian (computed)
        `Su nombre es ${this.name()} y tiene ${this.age()} años`
    );

    getHeroDescription() {
        return this.heroDescription();
    }

    cambiarHero() {
        this.name.set('Wolverine');
    }

    cambiarEdad() {
        this.age.set(45);
    }

    reset() {
        this.name.set('DeadPool');
        this.age.set(33);
    }

}