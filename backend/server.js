import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import chatRouter from './routes/chat.js';

const app = express();
// في Vercel، البورت بيتحدد تلقائي، فبنستخدم process.env.PORT
const PORT = process.env.PORT || 3001;

// 1. تحديث الـ CORS عشان يقبل دومين فيرسل بتاعك
app.use(cors({ 
    origin: [
        'http://localhost:5173', 
        'http://localhost:3000', 
        'https://roadmap-ai-chi.vercel.app' // رابط الفرونت-إيند بتاعك
    ],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());

// التوجيهات (Routes)
app.use('/api/chat', chatRouter);

// اختبار الصحة (Health Check)
app.get('/health', (_req, res) => res.json({ status: 'ok', message: 'ELNAGAR AI Server is running' }));

// 2. تعديل بسيط عشان Vercel يعامل الملف كـ Serverless Function
export default app; 

// بنشغل السيرفر فقط لو مش في بيئة Vercel (اختياري بس أحسن للأمان)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`RoadmapAI backend running on http://localhost:${PORT}`);
    });
}