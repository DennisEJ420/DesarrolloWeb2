import { Component, signal } from '@angular/core';

@Component({

    // selector: 'app-counter', >> se puede a añadir un selector
    // standalone: true, >> se usa en versiones recientes de Angular 

    templateUrl: './counter.component.html', //activa/importa el HTML
    styleUrl: './counter.component.css' //activa/importa el CSS
})
export class CounterPageComponent {

    contador = 10;
    contadorSignal = signal(5); //El valor inicial de la señal se indica para controlar la lógica en caso de que cambie

    increaseBy(value:number){
        this.contador += value; //acumulador +=
        this.contadorSignal.set(this.contadorSignal()+value);
    }

    reset(){
        this.contador = 10;
        this.contadorSignal.set(5);
    }

}