import { Component, signal } from "@angular/core";
import { CharacterFormComponent } from "../../components/character-form/character-form.component";

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    selector: 'app-anime-super',
    imports:[CharacterFormComponent],
    templateUrl: './anime-super-page.component.html'
})

export class AnimeSuperComponent {
    name = signal('');
    power = signal(0);
    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 8000 },
        { id: 3, name: 'Piccolo', power: 3000 },
        { id: 4, name: 'Yamcha', power: 500 },
    ]);

    addCharacter() {
        console.log(this.name(), this.power());

        if (!this.name() || this.power() <= 0) {
            return;
        }

        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        };

        this.characters.update(characters => [...characters, newCharacter]);
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
}