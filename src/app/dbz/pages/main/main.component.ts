import { Component } from '@angular/core';
import { Characters } from '../../interfaces/characters';
import { CharactersDbzService } from '../../services/charactersDbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private dbzService: CharactersDbzService){}

  get characters():Characters[]{

    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id:string):void{
      this.dbzService.deleteCharacterById(id);

  }
  addCharacter(character:Characters):void{
    this.dbzService.onNewCharacter(character);
  }

}
