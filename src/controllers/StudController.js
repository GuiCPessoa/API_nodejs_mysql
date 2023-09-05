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
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};
        let codigo = req.params.codigo;
        let estudante = await StudService.buscarUm(codigo);

        if(estudante){
            json.result = estudante;
        }
        res.json(json);
        
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};


        let nome = req.body.nome;
        let sobrenome = req.body.sobrenome;

        if(nome && sobrenome){
            let StudCodigo = await StudService.inserir(nome, sobrenome);
            json.result = {
                codigo: StudCodigo,
                nome,
                sobrenome
            };
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json);
        
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let sobrenome = req.body.sobrenome;

        if(codigo && nome && sobrenome){
            await StudService.alterar(codigo, nome, sobrenome);
            json.result = {
                codigo,
                nome,
                sobrenome
            };
        }else{
            json.error = 'Campos não enviados'
        }   
        res.json(json);     
    },

    delete: async(req, res) => {
        let json = {error:'', result:{}};

        await StudService.delete(req.params.codigo); //Já pega direto o que você quer exluir
        res.json(json);
    }
}