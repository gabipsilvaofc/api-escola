const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  disciplina: { type: String, required: true },
  salario: { type: Number, default: 0 }
});

module.exports = mongoose.model('Professor', professorSchema);
