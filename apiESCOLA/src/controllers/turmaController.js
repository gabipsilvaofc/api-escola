// src/controllers/turmaController.js
const Turma = require('../models/turma');

// Função para criar uma nova turma
const criarTurma = async (req, res) => {
  try {
    const turma = new Turma(req.body); // Cria um novo objeto Turma a partir dos dados enviados
    await turma.save(); // Salva no banco de dados
    res.status(201).json(turma); // Retorna o objeto criado com status 201 (Criado)
  } catch (err) {
    res.status(400).json({ mensagem: err.message }); // Em caso de erro, retorna o erro com status 400
  }
};

// Função para obter todas as turmas
const obterTurmas = async (req, res) => {
  try {
    const turmas = await Turma.find(); // Busca todas as turmas no banco
    res.status(200).json(turmas); // Retorna todas as turmas com status 200 (OK)
  } catch (err) {
    res.status(400).json({ mensagem: err.message }); // Em caso de erro, retorna o erro com status 400
  }
};

// Função para obter uma turma por ID
const obterTurmaPorId = async (req, res) => {
  try {
    const turma = await Turma.findById(req.params.id); // Busca a turma com o ID passado na URL
    if (!turma) return res.status(404).json({ mensagem: 'Turma não encontrada' }); // Se não encontrar, retorna 404
    res.status(200).json(turma); // Caso encontre, retorna a turma com status 200
  } catch (err) {
    res.status(400).json({ mensagem: err.message }); // Em caso de erro, retorna o erro com status 400
  }
};

// Função para atualizar uma turma
const atualizarTurma = async (req, res) => {
  try {
    const turma = await Turma.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Atualiza a turma com os novos dados
    if (!turma) return res.status(404).json({ mensagem: 'Turma não encontrada' }); // Se não encontrar, retorna 404
    res.status(200).json(turma); // Caso encontre e atualize, retorna a turma atualizada com status 200
  } catch (err) {
    res.status(400).json({ mensagem: err.message }); // Em caso de erro, retorna o erro com status 400
  }
};

// Função para deletar uma turma
const deletarTurma = async (req, res) => {
  try {
    const turma = await Turma.findByIdAndDelete(req.params.id); // Deleta a turma com o ID passado na URL
    if (!turma) return res.status(404).json({ mensagem: 'Turma não encontrada' }); // Se não encontrar, retorna 404
    res.status(200).json({ mensagem: 'Turma deletada com sucesso' }); // Caso encontre e delete, retorna uma mensagem de sucesso
  } catch (err) {
    res.status(400).json({ mensagem: err.message }); // Em caso de erro, retorna o erro com status 400
  }
};

module.exports = { criarTurma, obterTurmas, obterTurmaPorId, atualizarTurma, deletarTurma };
