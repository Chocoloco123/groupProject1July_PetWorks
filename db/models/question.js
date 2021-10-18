'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    petType: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
  }, {});
  Question.associate = function (models) {
    // associations can be defined here
  };
  return Question;
};