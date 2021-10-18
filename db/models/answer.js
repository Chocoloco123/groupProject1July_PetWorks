'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
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
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {});
  Answer.associate = function (models) {
    // associations can be defined here
  };
  return Answer;
};