const express = require('express')
const router = require('./router')
require('./database')

const PORT = 3333

const app = express()
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  return console.log('servidor subiu na porta ' + PORT)
})