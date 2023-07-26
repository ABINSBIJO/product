import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmainpageComponent } from './productmainpage.component';

describe('ProductmainpageComponent', () => {
  let component: ProductmainpageComponent;
  let fixture: ComponentFixture<ProductmainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductmainpageComponent]
    });
    fixture = TestBed.createComponent(ProductmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
