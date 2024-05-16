import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { ListDbzComponent } from './components/listDbz/listDbz.component';
import { AddDbzPComponent } from './components/add-dbz-p/add-dbz-p.component';



@NgModule({
  declarations: [

    MainComponent,
    ListDbzComponent,
    AddDbzPComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ MainComponent
   ]
})
export class DbzModule { }
