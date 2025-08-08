const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch'); // ✅ Use require, not import

dotenv.config();

const blogRoutes = require('./routes/blogs');
const productRoutes = require('./routes/products');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// === Routes ===
app.use('/api/blogs', blogRoutes);
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

// === AI Code Generator Route ===
app.post('/api/generate-code', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const response = await fetch(
            'https://api-inference.huggingface.co/models/codellama/CodeLlama-7b-Instruct-hf',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.HF_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        const data = await response.json();
        console.log("HF raw response:", data); // ✅ See actual Hugging Face output in Render logs

        if (!response.ok) {
            return res.status(response.status).json({
                error: 'Hugging Face API error',
                status: response.status,
                details: data,
            });
        }

        if (!Array.isArray(data) || !data[0]?.generated_text) {
            return res.status(500).json({
                error: 'No code generated from Hugging Face',
                details: data
            });
        }

        res.json({ code: data[0].generated_text });

    } catch (error) {
        console.error("Server error:", error); // ✅ Log full error
        res.status(500).json({
            error: 'Error generating code',
            details: error.message || error
        });
    }
});

// === MongoDB connection ===
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sanchitverse', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// === Root route ===
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to SanchitVerse API' });
});

// === Error handling middleware ===
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// === Start server ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
