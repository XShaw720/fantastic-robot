import {PORT} from './config/envvars.js';
import express from 'express';
import connectDb from './config/db.js';
import todoRouter from './services/todo/todo.routes.js';

const app = express();
app.use(express.json());

connectDb();

app.use('/api', todoRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
