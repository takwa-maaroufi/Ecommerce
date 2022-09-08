import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcatComponent } from './topcat.component';

describe('TopcatComponent', () => {
  let component: TopcatComponent;
  let fixture: ComponentFixture<TopcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
