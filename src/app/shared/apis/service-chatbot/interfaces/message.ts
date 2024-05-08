export interface Message {
    content: string; 
    sender: 'user' | 'bot'; // Indicates who sent the message
}