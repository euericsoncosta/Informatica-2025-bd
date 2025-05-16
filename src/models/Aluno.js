import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Aluno extends Model {
    static associate(models) {
      // associações aqui, se houver
    }
  }

  Aluno.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Aluno',
    tableName: 'alunos',
    timestamps: true
  });

  return Aluno;
};
