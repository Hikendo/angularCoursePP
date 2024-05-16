import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './listDbz.component.html',
  styleUrl: './listDbz.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDbzComponent { }
