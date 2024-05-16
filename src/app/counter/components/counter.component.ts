import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`<p>Counter: {{counter}}</p>
  <button (click)="increaseby()">+1</button>
  <button (click)="resetCounter()">0</button>
  <button (click)="decreaseby()">-1</button>`,

})
export class CounterComponent{
  public counter : number= 0;
  increaseby():void{
    this.counter= this.counter + 1;
  }
  decreaseby():void{
    this.counter= this.counter - 1;
  }
  resetCounter():void{
    this.counter = 0;
  }

}
