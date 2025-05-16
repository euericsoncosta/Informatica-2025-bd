import Aluno from '../models/Aluno.js'; // ajuste o caminho conforme sua estrutura

class AlunoController {
  // GET /alunos
  async listarAlunos(req, res) {
    try {
      const alunos = await Aluno.findAll();
      if(alunos) res.render('alunos', { alunos });
    } catch (error) {
      res.render('alunos')
    }
  }

  // GET /alunos/:id
  async buscarAlunoPorId(req, res) {
    const { id } = req.params;
    try {
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado.' });
      }
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar aluno.' });
    }
  }

  // POST /alunos
  async criarAluno(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      res.status(201).json(novoAluno);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar aluno.', details: error.message });
    }
  }

  // PUT /alunos/:id
  async atualizarAluno(req, res) {
    const { id } = req.params;
    try {
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado.' });
      }
      await aluno.update(req.body);
      res.status(200).json(aluno);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar aluno.', details: error.message });
    }
  }

  // DELETE /alunos/:id
  async deletarAluno(req, res) {
    const { id } = req.params;
    try {
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado.' });
      }
      await aluno.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar aluno.' });
    }
  }
}

export default new AlunoController();
