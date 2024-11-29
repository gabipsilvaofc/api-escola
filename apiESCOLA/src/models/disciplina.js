const mongoose = require('mongoose');

const disciplinaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  cargaHoraria: {
    type: Number,
    required: true
  },
  descricao: {
    type: String,
    trim: true
  },
  professorResponsavel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Professor', // Relacionamento com o modelo Professor
    required: true
  },
  turmas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Turma' // Relacionamento com o modelo Turma
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Disciplina', disciplinaSchema);
