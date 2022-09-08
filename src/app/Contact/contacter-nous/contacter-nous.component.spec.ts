import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterNousComponent } from './contacter-nous.component';

describe('ContacterNousComponent', () => {
  let component: ContacterNousComponent;
  let fixture: ComponentFixture<ContacterNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacterNousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacterNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
