import { Component, signal } from "@angular/core";
import { CharacterFormComponent } from "../../components/character-form/character-form.component";
import { CharacterListComponent } from "../../components/character-list/character-list.component";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-anime-super',
  standalone: true,
  imports: [CharacterFormComponent, CharacterListComponent],
  templateUrl: './anime-super-page.component.html'
})

export class AnimeSuperComponent {

  characters = signal<Character[]>([
    /*{ id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 4, name: 'Yamcha', power: 500 },*/
  ]);

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}