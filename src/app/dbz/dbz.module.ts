import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';

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
    CommonModule,
    FormsModule
  ],
  exports: [ MainComponent
   ]
})
export class DbzModule { }
