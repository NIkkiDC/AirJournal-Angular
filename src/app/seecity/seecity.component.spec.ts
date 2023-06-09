import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeecityComponent } from './seecity.component';

describe('SeecityComponent', () => {
  let component: SeecityComponent;
  let fixture: ComponentFixture<SeecityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeecityComponent]
    });
    fixture = TestBed.createComponent(SeecityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
