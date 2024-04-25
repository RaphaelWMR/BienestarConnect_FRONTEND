import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCRMComponent } from './help-crm.component';

describe('HelpCRMComponent', () => {
  let component: HelpCRMComponent;
  let fixture: ComponentFixture<HelpCRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpCRMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpCRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
