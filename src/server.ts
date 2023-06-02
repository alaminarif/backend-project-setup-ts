import mongoose from 'mongoose'
import config from './config'
import app from './app'

const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url as string)
    // eslint-disable-next-line no-console
    console.log(`🛢   Database is connected successfully`)

    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Application  listening on port ${config.port}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('failed to database: ', error)
  }
}

bootstrap()
