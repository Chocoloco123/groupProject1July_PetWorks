'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    answerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Answers' }
    },
    comment: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
    Comment.belongsTo(models.Answer, { foreignKey: 'answerId' })
  };
  return Comment;
};