const express = require('express')
const router = require('./router')
const logger = require('./logger')
const pinoHttp = require('pino-http')({
  logger
})
require('./database')

const PORT = 3333

const app = express()
app.use(express.json())
app.use(pinoHttp)
app.use(router)

app.listen(PORT, () => {
  logger.info('server running on port ' + PORT)
})