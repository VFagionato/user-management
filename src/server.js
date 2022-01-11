const express = require('express')
const app = express()

const route = express.Router()

route.get('/', async (req, res) => {
  return res.json({hello: 'world'})
})

app.use(route)

app.listen(3333)