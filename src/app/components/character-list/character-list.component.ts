import { Component, input } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {

  characters = input<Character[]>();
}