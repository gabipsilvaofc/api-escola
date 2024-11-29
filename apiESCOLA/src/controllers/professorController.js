const Professor = require('../models/Professor');

// Listar todos os professores
exports.listarProfessores = async (req, res) => {
  try {
    const professores = await Professor.find();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar professores', error });
  }
};

// Criar novo professor
exports.criarProfessor = async (req, res) => {
  try {
    const professor = new Professor(req.body);
    await professor.save();
    res.status(201).json(professor);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar professor', error });
  }
};

// Atualizar um professor
exports.atualizarProfessor = async (req, res) => {
  const { id } = req.params;
  try {
    const professorAtualizado = await Professor.findByIdAndUpdate(id, req.body, { new: true });
    if (!professorAtualizado) {
      return res.status(404).json({ message: 'Professor não encontrado' });
    }
    res.json(professorAtualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar professor', error });
  }
};

// Remover um professor
exports.removerProfessor = async (req, res) => {
  const { id } = req.params;
  try {
    const professorRemovido = await Professor.findByIdAndDelete(id);
    if (!professorRemovido) {
      return res.status(404).json({ message: 'Professor não encontrado' });
    }
    res.json({ message: 'Professor removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover professor', error });
  }
};
