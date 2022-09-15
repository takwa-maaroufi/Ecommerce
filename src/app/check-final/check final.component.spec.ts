import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFinalComponent } from './check-final.component';

describe('CheckFinalComponent', () => {
  let component: CheckFinalComponent;
  let fixture: ComponentFixture<CheckFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});