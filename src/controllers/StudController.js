const StudService = require('../services/StudService');

module.exports = {
    buscarTodos: async(req, res) =>{
        let json = {error:'', result:[]};

        let estudantes = await StudService.buscarTodos();

        for(let i in estudantes){
            json.result.push({
                codigo: estudantes[i].codigo,
                descricao: estudantes[i].nome
            });
        }
        res.json(json);
    }
}