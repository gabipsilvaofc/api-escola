const mongoose = require('mongoose');

// Schema define os campos e regras do Aluno
const alunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  turma: { type: String, required: true },
  matricula: { type: String, unique: true, required: true }
});

// Exporta o modelo para ser usado em outras partes da aplicação
module.exports = mongoose.model('Aluno', alunoSchema);
