const express = require('express');
const disciplinaController = require('../controllers/disciplinaController');

const router = express.Router();

// Listar todas as disciplinas
router.get('/', disciplinaController.listarDisciplinas);

// Obter uma disciplina específica por ID
router.get('/:id', disciplinaController.obterDisciplinaPorId);

// Criar uma nova disciplina
router.post('/', disciplinaController.criarDisciplina);

// Atualizar uma disciplina por ID
router.put('/:id', disciplinaController.atualizarDisciplina);

// Remover uma disciplina por ID
router.delete('/:id', disciplinaController.removerDisciplina);

module.exports = router;
