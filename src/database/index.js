const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')

const connection = new Sequelize(dbConfig)

User.init(connection)

const test = async () => {
  try {
    await connection.authenticate()
    console.log('conexão com o banco de dados estabelecida com sucesso')
    console.log('resetando banco de dados')
    await connection.sync({force: true})
    console.log('reset feito com sucesso!')
  } catch (error) {
    console.log('conexão não estabelecida')
    console.log(`erro: ${error.message}`)
  }
}

test()

module.exports = connection