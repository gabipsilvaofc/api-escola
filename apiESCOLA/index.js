const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conectarBanco = require('./config/db');

// Rotas
const alunoRoutes = require('./routes/alunoRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');

dotenv.config();
conectarBanco();

const app = express();
app.use(cors());
app.use(express.json());

// Usar as rotas
app.use('/api/alunos', alunoRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/disciplinas', disciplinaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
