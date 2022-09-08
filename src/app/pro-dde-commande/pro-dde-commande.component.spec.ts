import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDdeCommandeComponent } from './pro-dde-commande.component';

describe('ProDdeCommandeComponent', () => {
  let component: ProDdeCommandeComponent;
  let fixture: ComponentFixture<ProDdeCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProDdeCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDdeCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
