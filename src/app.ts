import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import routeProducts from './routes/Products';
import routeUsers from './routes/Users';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/products', routeProducts);
app.use('/users', routeUsers);

app.use(errorHandler);

export default app;