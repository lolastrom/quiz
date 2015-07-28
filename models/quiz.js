//Definicion del modelo de Quiz

module.export = function(sequelize, DataTypes) {
  return sequelize.define('Quiz',
          {pregunta: DataTypes.STRING,
          respuesta: DataTypes.STRING,
        });
}
