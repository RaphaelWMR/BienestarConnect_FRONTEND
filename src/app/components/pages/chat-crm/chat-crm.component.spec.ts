import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCRMComponent } from './chat-crm.component';

describe('ChatCRMComponent', () => {
  let component: ChatCRMComponent;
  let fixture: ComponentFixture<ChatCRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatCRMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatCRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
