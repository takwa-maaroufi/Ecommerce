import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueCComponent } from './historique-c.component';

describe('HistoriqueCComponent', () => {
  let component: HistoriqueCComponent;
  let fixture: ComponentFixture<HistoriqueCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
