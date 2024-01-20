// /api/chat.js

const OpenAI = require('openai-api');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);

export default async (req, res) => {
    const { message } = req.body;

    try {
        const gptResponse = await openai.complete({
            engine: 'davinci',
            prompt: message,
            maxTokens: 150,
            temperature: 0.7,
            topP: 1,
            frequencyPenalty: 0,
            presencePenalty: 0
        });

        res.status(200).json({ reply: gptResponse.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
