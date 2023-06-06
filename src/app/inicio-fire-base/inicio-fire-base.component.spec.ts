import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFireBaseComponent } from './inicio-fire-base.component';

describe('InicioFireBaseComponent', () => {
  let component: InicioFireBaseComponent;
  let fixture: ComponentFixture<InicioFireBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioFireBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioFireBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
