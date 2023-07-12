import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngliComponent } from './ingli.component';

describe('IngliComponent', () => {
  let component: IngliComponent;
  let fixture: ComponentFixture<IngliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
