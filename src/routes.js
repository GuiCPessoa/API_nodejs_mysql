const express = require('express');
const router = express.Router();

const StudController = require('./controllers/StudController');

router.get('/estudantes', StudController.buscarTodos);

module.exports = router;