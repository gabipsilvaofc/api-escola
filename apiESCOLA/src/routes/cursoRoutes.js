const express = require('express');
const cursoController = require('../controllers/cursoController');

const router = express.Router();

// Listar todos os cursos
router.get('/', cursoController.listarCursos);

// Obter um curso específico por ID
router.get('/:id', cursoController.obterCursoPorId);

// Criar um novo curso
router.post('/', cursoController.criarCurso);

// Atualizar um curso por ID
router.put('/:id', cursoController.atualizarCurso);

// Remover um curso por ID
router.delete('/:id', cursoController.removerCurso);

module.exports = router;
