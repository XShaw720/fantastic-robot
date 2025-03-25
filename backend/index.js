import 'dotenv/config'
import express from 'express';
import connectDb from './config/db.js';
import todoRouter from './services/todo/todo.routes.js';

const app = express();
app.use(express.json());

connectDb();

app.use('/api', todoRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
