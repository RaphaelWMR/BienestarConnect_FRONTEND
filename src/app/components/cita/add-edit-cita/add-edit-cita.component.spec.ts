import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditCitaComponent } from './add-edit-cita.component';

describe('AddEditCitaComponent', () => {
  let component: AddEditCitaComponent;
  let fixture: ComponentFixture<AddEditCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditCitaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddEditCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
