import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors);

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role:"user", content: "Hello there!" }],
            max_tokens: 100
        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data  = await response.json();
        res.send(data);
    } catch (err) {
        console.error(err);
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})