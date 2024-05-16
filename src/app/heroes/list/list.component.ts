import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //todo
    public heroNames: string[]= ['Luffy', 'Goku', 'Naruto', 'Ichigo'];
   public deletedHero?: string ='Aun no se borra nadie';
    deleteLast():void{
      this.deletedHero=this.heroNames.pop() ;
    }
    reset():void{
      this.heroNames= ['Luffy', 'Goku', 'Naruto', 'Ichigo'];
    }
  }
