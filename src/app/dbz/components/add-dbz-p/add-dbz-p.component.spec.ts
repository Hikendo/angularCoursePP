import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDbzPComponent } from './add-dbz-p.component';

describe('AddDbzPComponent', () => {
  let component: AddDbzPComponent;
  let fixture: ComponentFixture<AddDbzPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDbzPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDbzPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
