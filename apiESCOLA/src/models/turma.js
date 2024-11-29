const mongoose = require('mongoose');

const turmaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  ano: {
    type: Number,
    required: true
  },
  turno: {
    type: String,
    enum: ['Matutino', 'Vespertino', 'Noturno'], // Apenas valores permitidos
    required: true
  },
  sala: {
    type: String,
    required: true
  },
  alunos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aluno' // Relacionamento com o modelo Aluno
    }
  ],
  professores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Professor' // Relacionamento com o modelo Professor
    }
  ]
}, {
  timestamps: true // Cria automaticamente os campos createdAt e updatedAt
});

module.exports = mongoose.model('Turma', turmaSchema);
