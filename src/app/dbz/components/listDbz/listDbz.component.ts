import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/characters';
import { v4 as uuid} from 'uuid';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './listDbz.component.html',
  styleUrl: './listDbz.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListDbzComponent {
  @Input()
  public characterList: Characters[]=[
    {id:uuid(), name: 'Goku', power: 1000}

  ];

  @Output()
  onDeleteCharacter: EventEmitter<string>= new EventEmitter();


    deleteCharacter(id:string):void{
            this.onDeleteCharacter.emit(id);


    }
}
