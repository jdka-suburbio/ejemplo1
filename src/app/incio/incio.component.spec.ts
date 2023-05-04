import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioComponent } from './incio.component';

describe('IncioComponent', () => {
  let component: IncioComponent;
  let fixture: ComponentFixture<IncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
