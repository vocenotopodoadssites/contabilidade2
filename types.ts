export interface ServiceItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface Testimonial {
  text: string;
  author?: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
