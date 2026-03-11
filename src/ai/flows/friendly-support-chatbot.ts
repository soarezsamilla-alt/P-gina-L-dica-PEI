'use server';
/**
 * @fileOverview A friendly support chatbot flow for the "Página Lúdica PEI" sales page.
 * This chatbot provides instant answers to customer questions about PEI models and the purchasing process.
 *
 * - friendlySupportChatbot - A function that handles the chatbot interaction.
 * - FriendlySupportChatbotInput - The input type for the friendlySupportChatbot function.
 * - FriendlySupportChatbotOutput - The return type for the friendlySupportChatbot function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const FriendlySupportChatbotInputSchema = z.object({
  question: z.string().describe('The user\'s question about PEI models or the purchasing process.'),
});
export type FriendlySupportChatbotInput = z.infer<typeof FriendlySupportChatbotInputSchema>;

const FriendlySupportChatbotOutputSchema = z.object({
  answer: z.string().describe('The friendly and helpful answer to the user\'s question.'),
});
export type FriendlySupportChatbotOutput = z.infer<typeof FriendlySupportChatbotOutputSchema>;

export async function friendlySupportChatbot(input: FriendlySupportChatbotInput): Promise<FriendlySupportChatbotOutput> {
  return friendlySupportChatbotFlow(input);
}

const friendlySupportChatbotPrompt = ai.definePrompt({
  name: 'friendlySupportChatbotPrompt',
  input: { schema: FriendlySupportChatbotInputSchema },
  output: { schema: FriendlySupportChatbotOutputSchema },
  prompt: `Você é um chatbot de suporte amigável e útil para a "Página Lúdica PEI".
Sua função é responder a perguntas sobre os modelos PEI e o processo de compra, fornecendo informações claras e concisas.
Os modelos PEI são "200 Modelos de PEI prontos para brincar de ensinar! Editáveis e super fáceis de usar!".

Seja encorajador e mantenha um tom lúdico e amigável, alinhado com o estilo da página.
Não invente informações. Se você não souber a resposta, diga que não tem essa informação.

Pergunta do usuário: {{{question}}}`,
});

const friendlySupportChatbotFlow = ai.defineFlow(
  {
    name: 'friendlySupportChatbotFlow',
    inputSchema: FriendlySupportChatbotInputSchema,
    outputSchema: FriendlySupportChatbotOutputSchema,
  },
  async (input) => {
    const { output } = await friendlySupportChatbotPrompt(input);
    return output!;
  }
);
