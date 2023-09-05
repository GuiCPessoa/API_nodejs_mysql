const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM estudantes', (error, results)=>{
                if(error) {rejeitado(error); return;}

                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {

        
            db.query('SELECT * FROM estudantes WHERE codigo = ?', [codigo],  (error, results)=>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0) {
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });

        });
    },

    inserir: (nome, sobrenome) => {
        return new Promise((aceito, rejeitado) => {

        
            db.query('INSERT INTO estudantes (nome, sobrenome) VALUES (?, ?)', 
            [nome, sobrenome],  
            (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results.insertCodigo);
            });

        });
    },

    alterar: (codigo, nome, sobrenome) => {
        return new Promise((aceito, rejeitado) => {

        
            db.query('UPDATE estudantes SET nome = ?, sobrenome = ? WHERE codigo = ?', 
            [nome, sobrenome, codigo],  
            (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });

        });
    },

    delete: (codigo) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('DELETE FROM estudantes WHERE codigo = ?', [codigo], (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },
};

