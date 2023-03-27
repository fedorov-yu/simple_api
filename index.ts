import express, {Request, Response, NextFunction} from 'express';
import { userRouter } from './users/users.js';

const PORT = 8080
const app = express();

app.use((req, res, next) => {
    console.log('Time: ' + Date.now());
    next();
});

app.get('/hello', (req, res) => {
    throw new Error('error!');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(401).send(err.message);
});


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
