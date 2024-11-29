const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

// Rotas para os métodos CRUD de professor
router.get('/', professorController.listarProfessores);
router.post('/', professorController.criarProfessor);
router.put('/:id', professorController.atualizarProfessor);
router.delete('/:id', professorController.removerProfessor);

module.exports = router;
