import express from 'express';
import cors from 'cors';
import 'dotenv-safe/config';

import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(cors({ credentials: false })); // rever esse caso
app.use(routes);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server is Running on http://localhost:${PORT}`));
