import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesSuccessComponent } from './acces-success.component';

describe('AccesSuccessComponent', () => {
  let component: AccesSuccessComponent;
  let fixture: ComponentFixture<AccesSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
