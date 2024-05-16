import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string= 'naruto';
  public age:number=33;
  public chName:boolean=true;
  public chAge:boolean=true;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    this.name='Goku';
    this.chName=false;
  }
  changeAge():void{
    this.age=50;
    this.chAge=false;
  }
  reset():void{
    this.name='naruto';
    this.age=33;
    this.chName=true;
    this.chAge=true;

  }

}
