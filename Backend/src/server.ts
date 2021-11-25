import express from 'express';
import { routes } from './routes';
import 'dotenv-safe/config';

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is Running on http://localhost:${PORT}`));
