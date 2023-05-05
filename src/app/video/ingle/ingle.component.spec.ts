import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngleComponent } from './ingle.component';

describe('IngleComponent', () => {
  let component: IngleComponent;
  let fixture: ComponentFixture<IngleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
