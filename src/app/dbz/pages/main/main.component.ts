import { Component } from '@angular/core';
import { Characters } from '../../interfaces/characters';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
    public characters: Characters[]=[
      {name: 'Goku', power: 1000},
      {name: 'Gohan', power: 800},
      {name: 'Vegeta', power: 1100},
      {name: 'Milk', power: 1100}

    ];
    onNewCharacter(character:Characters){
     // this.characters.unshift(character);
      this.characters=[...this.characters,character]
    }
    onDeleteCharacter(index:number){
     /* const aux=[...this.characters];
      aux.splice(index,1);
      this.characters=[...aux];
      */
      this.characters.splice(index,1);

      // this.characters.unshift(character);
       //this.characters=this.characters.splice();
     }

}
