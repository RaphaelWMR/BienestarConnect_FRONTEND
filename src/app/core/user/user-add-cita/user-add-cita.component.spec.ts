import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddCitaComponent } from './user-add-cita.component';

describe('UserAddCitaComponent', () => {
  let component: UserAddCitaComponent;
  let fixture: ComponentFixture<UserAddCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAddCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
