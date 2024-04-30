import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckAvailabilityComponent } from './user-check-availability.component';

describe('UserCheckAvailabilityComponent', () => {
  let component: UserCheckAvailabilityComponent;
  let fixture: ComponentFixture<UserCheckAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCheckAvailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCheckAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
