module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'huge_admin',
  password: '1234',
  database: 'users',
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
  timezone: '+03:00'
}