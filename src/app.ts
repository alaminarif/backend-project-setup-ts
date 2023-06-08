import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from 'express';
import cors from 'cors';
import globalErrodHandler from './app/middleware/GlobalErrorHandler';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// global error handlle

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  Promise.reject(new Error('Unhandle Promise Rejection'));
});

app.use(globalErrodHandler);
export default app;
