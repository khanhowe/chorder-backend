import express, { Express } from 'express';
import userRoutes from './routes/userRoutes';
import chordRoutes from './routes/chordRoutes';

const app: Express = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/chords', chordRoutes )

export default app;