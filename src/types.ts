export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ZenithState {
  conversations: Conversation[];
  activeConversationId: string | null;
  apiKey: string;
  loading: boolean;
}

export interface ThemeState {
  theme: 'light' | 'dark';
}