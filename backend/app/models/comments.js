'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    users_id: DataTypes.INTEGER,
    movies_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
  };
  return comments;
};