import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitRegistrationComponent } from './wait-registration.component';

describe('WaitRegistrationComponent', () => {
  let component: WaitRegistrationComponent;
  let fixture: ComponentFixture<WaitRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
