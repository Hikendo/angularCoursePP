import { Injectable } from '@angular/core';
import { Characters } from '../interfaces/characters';
import {v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CharactersDbzService {
  public characters: Characters[]=[
    {id:uuid(), name: 'Goku', power: 1000},
    {id:uuid(), name: 'Gohan', power: 800},
    {id:uuid(), name: 'Vegeta', power: 1100},
    {id:uuid(), name: 'Milk', power: 1100}

  ];
  onNewCharacter(character:Characters){
    
    this.characters=[...this.characters,character]
  }

   deleteCharacterById(id:string):void{
      this.characters=this.characters.filter(character=> character.id!==id);

   }
}
