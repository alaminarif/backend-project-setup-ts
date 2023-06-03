import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from 'express'
import cors from 'cors'
import globalErrodHandler from './app/middleware/errorHandler'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

// global error handlle

class ApiError extends Error {
  statusCode: number
  constructor(statusCode: number, message: string | undefined) {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

// app.get('/', (req: Request, res: Response) => {
//   throw new ApiError('error disi')
//   // res.send('home route okh')
//   // res.send('home route okh')
// })

app.use(globalErrodHandler)
export default app
