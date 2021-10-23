'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    emailAddress: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      unique: true
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Question, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true })
    User.hasMany(models.Answer, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true })
    User.hasMany(models.Comment, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true })
    User.hasMany(models.Like, { foreignKey: 'userId' })
  };
  return User;
};