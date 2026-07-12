import { Component, inject, signal } from "@angular/core";
import { CharacterFormComponent } from "../../components/character-form/character-form.component";
import { CharacterListComponent } from "../../components/character-list/character-list.component";
import { VariosService } from "../../services/varios.service";

/*Se migra hacia character.interface */
/*interface Character {
  id: number;
  name: string;
  power: number;
}*/

@Component({
  selector: 'app-anime-super',
  standalone: true,
  imports: [CharacterFormComponent, CharacterListComponent],
  templateUrl: './anime-super-page.component.html'
})

export class AnimeSuperComponent {
  //INYECTAR SERVICIO DE FORMA TRADICIONAL
  /*constructor(
    public variosService: VariosService
  ){}*/

  //INYECTAR SERVICIO DE FORMA MÁS FUNCIONAL Y MODERNA
  public variosService = inject(VariosService);
}