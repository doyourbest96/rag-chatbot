// server.js (or server.mjs)

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    // Simple response logic for demonstration purposes.
    const botResponse = `You said: ${userMessage}`;
    
    res.json({ response: botResponse });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});