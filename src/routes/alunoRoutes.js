import express from 'express';
import AlunoController from '../controllers/alunoController.js';

const router = express.Router();

router.get('/alunos', (req, res) => AlunoController.listarAlunos(req, res));
router.get('/alunos/:id', (req, res) => AlunoController.buscarAlunoPorId(req, res));
router.post('/alunos', (req, res) => AlunoController.criarAluno(req, res));
router.put('/alunos/:id', (req, res) => AlunoController.atualizarAluno(req, res));
router.delete('/alunos/:id', (req, res) => AlunoController.deletarAluno(req, res));

export default router;
