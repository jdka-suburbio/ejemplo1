import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionComponent } from './programacion.component';

describe('ProgramacionComponent', () => {
  let component: ProgramacionComponent;
  let fixture: ComponentFixture<ProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
