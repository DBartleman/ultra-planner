'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { 
    userName: { type: DataTypes.STRING(32), allowNull: false, unique: true },
    hashedPass: { type: DataTypes.STRING(100), allowNull: false },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
