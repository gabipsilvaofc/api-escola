const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  duracao: {
    type: Number, // Duração do curso em anos ou meses
    required: true
  },
  descricao: {
    type: String,
    trim: true
  },
  disciplinas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Disciplina' // Relacionamento com o modelo Disciplina
    }
  ],
  turmas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Turma' // Relacionamento com o modelo Turma
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Curso', cursoSchema);
