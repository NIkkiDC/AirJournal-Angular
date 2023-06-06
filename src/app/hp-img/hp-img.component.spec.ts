import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpImgComponent } from './hp-img.component';

describe('HpImgComponent', () => {
  let component: HpImgComponent;
  let fixture: ComponentFixture<HpImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HpImgComponent]
    });
    fixture = TestBed.createComponent(HpImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
