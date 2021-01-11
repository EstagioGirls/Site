const db = require('./db')

const Post = db.sequelize.define('materiais', {
    id: {
        type: db.Sequelize.STRING,
        primaryKey:true,
        allowNull: false
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    disponibilidade: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    }
})
/*
Post.create({
    id: 'A00011',
    nome: 'Furadeira de coluna',
    disponibilidade: 1
})*/

module.exports = Post