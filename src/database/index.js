const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const logger = require('../logger')

const User = require('../models/User')

const connection = new Sequelize(dbConfig)

User.init(connection)

const test = async () => {
  try {
    await connection.authenticate()
    await connection.sync()
    logger.info('database connection established')
  } catch (error) {
    logger.error(error.message)
  }
}

test()

module.exports = connection