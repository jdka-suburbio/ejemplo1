import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasededatosComponent } from './basededatos.component';

describe('BasededatosComponent', () => {
  let component: BasededatosComponent;
  let fixture: ComponentFixture<BasededatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasededatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasededatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
