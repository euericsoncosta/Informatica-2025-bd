import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      matricula: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      tableName: 'alunos',
      modelName: 'Aluno',
      timestamps: true,
    });

    return this;
  }

  static associate(models) {
    // Defina as associações aqui, se necessário
  }
}
