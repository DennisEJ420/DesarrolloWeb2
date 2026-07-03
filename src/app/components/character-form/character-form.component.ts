import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-character-form',
  imports: [],
  templateUrl: './character-form.component.html'
})
export class CharacterFormComponent {
  name = signal('');
  power = signal(0);

  addCharacter() {
    throw new Error('Method not implemented.');
  }

}