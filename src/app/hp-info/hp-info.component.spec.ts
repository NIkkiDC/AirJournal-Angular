import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpInfoComponent } from './hp-info.component';

describe('HpInfoComponent', () => {
  let component: HpInfoComponent;
  let fixture: ComponentFixture<HpInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HpInfoComponent]
    });
    fixture = TestBed.createComponent(HpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
