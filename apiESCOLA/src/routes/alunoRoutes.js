const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Rotas para os métodos CRUD de aluno
router.get('/', alunoController.listarAlunos);
router.post('/', alunoController.criarAluno);
router.put('/:id', alunoController.atualizarAluno);
router.delete('/:id', alunoController.removerAluno);

module.exports = router;
