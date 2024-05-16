import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/characters';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './listDbz.component.html',
  styleUrl: './listDbz.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListDbzComponent {
  @Input()
  public characterList: Characters[]=[
    {name: 'Goku', power: 1000}

  ];

  @Output()
  onDeleteCharacter: EventEmitter<number>= new EventEmitter();


    deleteCharacter(index:number):void{
            this.onDeleteCharacter.emit(index);


    }
}
