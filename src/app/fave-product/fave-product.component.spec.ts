import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveProductComponent } from './fave-product.component';

describe('FaveProductComponent', () => {
  let component: FaveProductComponent;
  let fixture: ComponentFixture<FaveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaveProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
