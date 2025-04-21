export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  prompt: string;
}

export const educationTemplates: PromptTemplate[] = [
  {
    id: 'explain-concept',
    title: 'Explain a Concept',
    description: 'Get a detailed explanation of any academic concept',
    prompt: 'Explain the concept of [topic] in simple terms, providing examples and real-world applications. Break down complex ideas into understandable parts.'
  },
  {
    id: 'study-plan',
    title: 'Create Study Plan',
    description: 'Generate a personalized study schedule',
    prompt: 'Create a detailed study plan for [subject/topic] that covers the next [timeframe]. Include specific goals, milestones, and recommended study techniques.'
  },
  {
    id: 'practice-questions',
    title: 'Generate Practice Questions',
    description: 'Get practice questions for any subject',
    prompt: 'Generate [number] practice questions about [topic] at [difficulty level] level. Include answers and explanations for each question.'
  },
  {
    id: 'summarize-text',
    title: 'Summarize Text',
    description: 'Create concise summaries of study materials',
    prompt: 'Summarize the following text, highlighting key points and main ideas: [paste your text here]'
  },
  {
    id: 'exam-prep',
    title: 'Exam Preparation',
    description: 'Get exam preparation strategies',
    prompt: 'Help me prepare for my [subject] exam. Focus on key topics, common question types, and effective revision strategies.'
  },
  {
    id: 'research-outline',
    title: 'Research Paper Outline',
    description: 'Generate a research paper structure',
    prompt: 'Create a detailed outline for a research paper on [topic]. Include suggested sections, key points to cover, and potential references to explore.'
  },
  {
    id: 'memory-techniques',
    title: 'Memory Techniques',
    description: 'Learn memorization strategies',
    prompt: 'Suggest effective memory techniques and mnemonics for remembering [topic/content]. Include examples and practice exercises.'
  },
  {
    id: 'topic-connection',
    title: 'Connect Topics',
    description: 'Understand relationships between topics',
    prompt: 'Explain how [topic 1] relates to and influences [topic 2]. Include key connections, shared principles, and practical applications.'
  }
];