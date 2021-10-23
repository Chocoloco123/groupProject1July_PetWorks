'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    liked: DataTypes.BOOLEAN
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
  };
  return Like;
};