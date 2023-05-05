import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenhoAlexComponent } from './disenho-alex.component';

describe('DisenhoAlexComponent', () => {
  let component: DisenhoAlexComponent;
  let fixture: ComponentFixture<DisenhoAlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenhoAlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenhoAlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
