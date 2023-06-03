import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { errorLogger, logger } from './share/logger'

const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url as string)
    // eslint-disable-next-line no-console
    logger.info(`🛢   Database is connected successfully`)

    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      logger.info(`Application  listening on port ${config.port}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    errorLogger.error('failed to database: ', error)
  }
}
//
bootstrap()
