const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});


connection.connect((error)=>{
    if(error) {
        console.error(`Erro ao conectar do Banco de dados: ${error.message}`);
    } else {
        console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`);
    } 
});

module.exports = connection;