import { Component } from '@angular/core';
import { ChatbotService } from '../../../apis/service-chatbot/chatbot.service';
import { Message } from '../../../apis/service-chatbot/interfaces/message';


@Component({
  selector: 'app-chatbot-component',
  templateUrl: './chatbot-component.component.html',
  styleUrl: './chatbot-component.component.css'
})
export class ChatbotComponentComponent {
  chatMessages: Message[] = [];
  userInput: string = '';

  constructor(public _chatService: ChatbotService) {


  }
  sendMessage(userInput: string) {
    if (userInput.trim()) {
      // Add user message to chatMessages
      this.chatMessages.push({ content: userInput, sender: 'user' });

      // Call chatbot service to get bot response
      this._chatService.sendMessage(userInput).subscribe(response => {
        const botResponse = response.response;

        // Add bot response to chatMessages
        this.chatMessages.push({ content: botResponse, sender: 'bot' });
      });
    }
  }
}
