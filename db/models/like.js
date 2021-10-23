'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    questionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Questions' }
    },
    liked: {
      type: DataTypes.BOOLEAN
    }
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.User, { foreignKey: 'userId' })
    Like.belongsTo(models.Question, { foreignKey: 'questionId' })
  };
  return Like;
};