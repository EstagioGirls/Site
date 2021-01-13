const db = require('./db')

const PostUsuarios = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    curso: {
        type: db.Sequelize.STRING,
    },
    idMaterial:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    matricula: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    data_emp: {
        type: db.Sequelize.DATEONLY,
        allowNull: false
    },
    hora_emp: {
        type: db.Sequelize.TIME,
        allowNull: false
    },
    data_dev: {
        type: db.Sequelize.DATEONLY,
    },
    hora_dev: {
        type: db.Sequelize.TIME,
    }
    
})
//PostUsuarios.sync({force:true})

module.exports = PostUsuarios