import { Component, EventEmitter, Output } from '@angular/core';
import { Characters } from '../../interfaces/characters';
import { v4 as uuid} from 'uuid';

@Component({
  selector: 'app-add-dbz-p',
  templateUrl: './add-dbz-p.component.html',
  styleUrl: './add-dbz-p.component.css'
})
export class AddDbzPComponent {

  @Output()
  onNewCharacter: EventEmitter<Characters> = new EventEmitter();

    public character:Characters={
      id:uuid(),
      name:'',
      power:0
    };
    emitCharacter():void{
        console.log(this.character);
      if(this.character.name.length===0) return;

      this.onNewCharacter.emit(this.character);

        this.character={id: uuid(), name:'',power:0};

    }
}
