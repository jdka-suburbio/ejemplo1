import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InglesComponent } from './ingles.component';

describe('InglesComponent', () => {
  let component: InglesComponent;
  let fixture: ComponentFixture<InglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
