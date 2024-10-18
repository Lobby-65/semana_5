'use strict';
const {
  Model,
  STRING
} = require('sequelize');
const post = require('./post');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Tags.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.REAL,
    tags: DataTypes[STRING]
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};