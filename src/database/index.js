import Sequelize from 'sequelize';
import config from '../config/database.cjs'; // Alterando a importação para o arquivo .cjs

import Aluno from '../models/Aluno.js';

const models = [Aluno]; // Lista de modelos a serem inicializados
// Configuração do Sequelize para conexão com o banco de dados
// O arquivo de configuração deve exportar um objeto com as informações necessárias
// como dialect, host, username, password e database

let connection;

try {
  // Tenta estabelecer a conexão com o banco de dados
  connection = new Sequelize(config);

  // Inicializa os modelos com a conexão
  models.forEach((model) => model(connection));

  // Faz as associações dos modelos, se existirem
  models.forEach((model) => {
    if (model.associate) model.associate(connection.models);
  });

  console.log('Conexão com o banco de dados estabelecida com sucesso!');
} catch (error) {
  // Captura e exibe o erro, caso haja falha na conexão ou na inicialização dos modelos
  console.error('Erro ao conectar ao banco de dados:', error);
}

export default connection; // Exporta a conexão para ser usada em outros módulos
