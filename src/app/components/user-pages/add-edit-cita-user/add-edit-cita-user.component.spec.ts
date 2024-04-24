import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCitaUserComponent } from './add-edit-cita-user.component';

describe('AddEditCitaUserComponent', () => {
  let component: AddEditCitaUserComponent;
  let fixture: ComponentFixture<AddEditCitaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditCitaUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditCitaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
