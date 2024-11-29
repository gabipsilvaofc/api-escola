const Aluno = require('../models/Aluno');

// Listar todos os alunos
exports.listarAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar alunos', error });
  }
};

// Criar novo aluno
exports.criarAluno = async (req, res) => {
  try {
    const aluno = new Aluno(req.body);
    await aluno.save();
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar aluno', error });
  }
};

// Atualizar um aluno
exports.atualizarAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const alunoAtualizado = await Aluno.findByIdAndUpdate(id, req.body, { new: true });
    if (!alunoAtualizado) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.json(alunoAtualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar aluno', error });
  }
};

// Remover um aluno
exports.removerAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const alunoRemovido = await Aluno.findByIdAndDelete(id);
    if (!alunoRemovido) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.json({ message: 'Aluno removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover aluno', error });
  }
};
