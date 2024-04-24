import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCitasUserComponent } from './list-citas-user.component';

describe('ListCitasUserComponent', () => {
  let component: ListCitasUserComponent;
  let fixture: ComponentFixture<ListCitasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCitasUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCitasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
