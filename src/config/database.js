module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  },
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
  },
  timezone: '+03:00',
  logging: false
}