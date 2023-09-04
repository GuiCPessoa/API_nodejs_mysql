require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors'); //permite acessar recursos de outros sites mesmo em dominios diferentes //
const bodyParser = require('body-parser'); //modulo capaz de converter um body de uma requisição em vários outros formatos


const routes = require('./routes'); //informando ao servidor onde está as rotas
const server = express(); //iniciando o server

server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})