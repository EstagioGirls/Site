const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste_db', 'teste', '12345',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}