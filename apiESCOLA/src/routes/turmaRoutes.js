const express = require('express');
const turmaController = require('../controllers/turmaController');

const router = express.Router();

// Listar todas as turmas
router.get('/', turmaController.listarTurmas);

// Obter uma turma específica por ID
router.get('/:id', turmaController.obterTurmaPorId);

// Criar uma nova turma
router.post('/', turmaController.criarTurma);

// Atualizar uma turma por ID
router.put('/:id', turmaController.atualizarTurma);

// Remover uma turma por ID
router.delete('/:id', turmaController.removerTurma);

module.exports = router;
