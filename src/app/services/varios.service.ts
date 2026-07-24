import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";

const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem("Personajes");
    return characters ? JSON.parse(characters) : []; //se hace la validación con "Operadores Ternarios"
}

@Injectable({
    providedIn: 'root'
})

export class VariosService {
    characters = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect(() => {
        console.log(`Conteo de Personajes ${this.characters().length}`);
        localStorage.setItem('Personajes', JSON.stringify(this.characters()));
    });

    addCharacter(character: Character) {
        this.characters.update((list) => [...list, character]);
    }
}