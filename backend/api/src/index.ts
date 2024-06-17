// src/index.ts
import express from 'express';
import userRouter from './router/user.router';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/db-select-example', (req, res) => {
  res.send('Hello, World!');
});

app.use('/user', userRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
