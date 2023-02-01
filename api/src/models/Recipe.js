const { Sequelize, DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    healthyness: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.TEXT,
    },
    steps: {
      type: DataTypes.TEXT
    },
    healthScore: {
      type: DataTypes.INTEGER,
      defaultValue: 80
    },
    dishTypes:{
      type: DataTypes.TEXT
    }
  },{timestamps: false});
};
