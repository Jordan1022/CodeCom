import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    try {
        const userMessage = request.body.message;

        const completion = await openai.chat.completions.create({
            messages: userMessage,
            model: 'gpt-3.5-turbo',
        });

        response.status(200).json({ reply: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error calling OpenAI:', error);
        response.status(500).json({ error: 'Error processing your request' });
    }
}
