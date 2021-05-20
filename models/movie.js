'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.movie.belongsTo(models.user);
      models.movie.hasMany(models.comment);
      //movie db belongs to many users
      //movie db can have many comments
    }
  };
  movie.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    review: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};