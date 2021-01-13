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
    id: 'A00028',
    nome: 'Tratamentos termoquímicos',
    disponibilidade: 1
})*/
/*
Post.update({ disponibilidade: 1 }, {
    where: {
      disponibilidade: 0
    }
  });
*/
module.exports = Post