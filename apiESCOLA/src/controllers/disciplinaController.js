const Disciplina = require('../models/Disciplina');

const disciplinaController = {
  // Listar todas as disciplinas
  listarDisciplinas: async (req, res) => {
    try {
      const disciplinas = await Disciplina.find().populate('professorResponsavel turmas'); // Popula os relacionamentos
      res.status(200).json(disciplinas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar disciplinas', error });
    }
  },

  // Obter uma disciplina por ID
  obterDisciplinaPorId: async (req, res) => {
    try {
      const disciplina = await Disciplina.findById(req.params.id).populate('professorResponsavel turmas');
      if (!disciplina) {
        return res.status(404).json({ message: 'Disciplina não encontrada' });
      }
      res.status(200).json(disciplina);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter disciplina', error });
    }
  },

  // Criar uma nova disciplina
  criarDisciplina: async (req, res) => {
    try {
      const { nome, cargaHoraria, descricao, professorResponsavel, turmas } = req.body;
      const novaDisciplina = new Disciplina({ nome, cargaHoraria, descricao, professorResponsavel, turmas });
      await novaDisciplina.save();
      res.status(201).json(novaDisciplina);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar disciplina', error });
    }
  },

  // Atualizar uma disciplina por ID
  atualizarDisciplina: async (req, res) => {
    try {
      const { nome, cargaHoraria, descricao, professorResponsavel, turmas } = req.body;
      const disciplinaAtualizada = await Disciplina.findByIdAndUpdate(
        req.params.id,
        { nome, cargaHoraria, descricao, professorResponsavel, turmas },
        { new: true }
      );
      if (!disciplinaAtualizada) {
        return res.status(404).json({ message: 'Disciplina não encontrada' });
      }
      res.status(200).json(disciplinaAtualizada);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar disciplina', error });
    }
  },

  // Remover uma disciplina por ID
  removerDisciplina: async (req, res) => {
    try {
      const disciplinaRemovida = await Disciplina.findByIdAndDelete(req.params.id);
      if (!disciplinaRemovida) {
        return res.status(404).json({ message: 'Disciplina não encontrada' });
      }
      res.status(200).json({ message: 'Disciplina removida com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover disciplina', error });
    }
  }
};

module.exports = disciplinaController;
