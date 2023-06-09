import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActiComponent } from './show-acti.component';

describe('ShowActiComponent', () => {
  let component: ShowActiComponent;
  let fixture: ComponentFixture<ShowActiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowActiComponent]
    });
    fixture = TestBed.createComponent(ShowActiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
