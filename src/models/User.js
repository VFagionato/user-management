const {Model, DataTypes} = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      employee: DataTypes.UUID,
      company: DataTypes.UUID
    }, {
      sequelize,
      modelName: 'User'
    })
  }
}

module.exports = User