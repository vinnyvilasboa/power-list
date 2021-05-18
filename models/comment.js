'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.comment.belongsTo(models.movie);
    }
  };
  comment.init({
    body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};