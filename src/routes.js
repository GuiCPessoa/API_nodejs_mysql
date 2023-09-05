const express = require('express');
const router = express.Router();

const StudController = require('./controllers/StudController');


router.get('/estudantes', StudController.buscarTodos);
router.get('/estudante/:codigo', StudController.buscarUm);
router.post('/estudante', StudController.inserir);
router.put('/estudante/:codigo', StudController.alterar);
router.delete('/estudante/:codigo', StudController.delete)


module.exports = router;