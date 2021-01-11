const express = require("express");
const app = express();
const Post = require('./models/Post')
//const Post2 = require('./models/Post2');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//Config
    //template engine
     app.engine('handlebars', handlebars({defaultLayout: 'main'}))
     app.set('view engine', 'handlebars')
    //Body Parser
     app.use(bodyParser.urlencoded({extended:false}))
     app.use(bodyParser.json())

//enxergar o css
app.use(express.static('views/layouts/src'));

//rotas

app.get('/', function(req, res){
    res.render('pagInicial')
})

app.get('/paginamateriais', function(req, res){
    Post.findAll().then(function(posts){
        res.render('pagMateriais', {posts: posts})
    })
})

app.get('/formulario', function(req, res){
    res.render('formulario')
})
/*
app.post('/formulario', function(req, res){
    Post2.findAll({
        where:{
            id: req.body.id,
            disponibilidade: 1
        }
    }).then(function(posts){
       if(posts.length != 0){
            Post.create({
                nome: req.body.nome,
                curso: req.body.curso,
                matricula: req.body.matricula,
                idMaterial: req.body.id,
                email: req.body.email,
                data_emp: req.body.dataemp,
                hora_emp: req.body.horaemp,
                data_dev: req.body.datadev,
                hora_dev: req.body.horadev
            }).then(function(){
                Post2.update({ disponibilidade: 0 }, {
                    where: {
                      id: req.body.id
                    }
                }).then(function(){
                    req.session.message = {
                        type: 'success',
                        intro: 'Dados corretos!',
                        message:'Você conseguiu pegar o material.'
                    }
                    res.redirect('/formulario')
                })
            })
        }else{
            req.session.message = {
                type: 'danger',
                intro: 'Algo errado!',
                message:'Verifique os dados inseridos.'
            }
            res.redirect('/formulario')
        }
    })        
}) 
*/
app.get('/contato', function(req, res){
    res.render('contato')
})

app.listen(3000);