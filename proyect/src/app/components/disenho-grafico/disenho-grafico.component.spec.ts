import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenhoGraficoComponent } from './disenho-grafico.component';

describe('DisenhoGraficoComponent', () => {
  let component: DisenhoGraficoComponent;
  let fixture: ComponentFixture<DisenhoGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenhoGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenhoGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
