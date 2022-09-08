import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteHomeComponent } from './recette-home.component';

describe('RecetteHomeComponent', () => {
  let component: RecetteHomeComponent;
  let fixture: ComponentFixture<RecetteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
