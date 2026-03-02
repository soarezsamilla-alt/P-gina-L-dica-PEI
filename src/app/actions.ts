'use server';

import { friendlySupportChatbot } from '@/ai/flows/friendly-support-chatbot';

export async function askQuestion(question: string): Promise<string> {
  if (!question) {
    return 'Por favor, digite uma pergunta.';
  }
  
  try {
    const response = await friendlySupportChatbot({ question });
    return response.answer;
  } catch (error) {
    console.error('Error in chatbot flow:', error);
    return 'Desculpe, ocorreu um erro ao tentar processar sua pergunta. Por favor, tente novamente mais tarde.';
  }
}
