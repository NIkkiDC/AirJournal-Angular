import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PActivitiesComponent } from './p-activities.component';

describe('PActivitiesComponent', () => {
  let component: PActivitiesComponent;
  let fixture: ComponentFixture<PActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PActivitiesComponent]
    });
    fixture = TestBed.createComponent(PActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
