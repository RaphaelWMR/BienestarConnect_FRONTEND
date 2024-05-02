import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatbotComponent } from './user-chatbot.component';

describe('UserChatbotComponent', () => {
  let component: UserChatbotComponent;
  let fixture: ComponentFixture<UserChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserChatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
