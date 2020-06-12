'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    release_date: DataTypes.STRING,
    ticket_price: DataTypes.DOUBLE,
    country: DataTypes.STRING,
    genre: DataTypes.TEXT,
    photo: DataTypes.TEXT
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};