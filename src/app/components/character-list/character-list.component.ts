import { Component, input } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent{ 
    characters = input.required<Character[]>() /*la estructura de Character[] viene desde character.interface.ts */
    listName = input.required<string>()
}