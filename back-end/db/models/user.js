'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { 
    name: { type: DataTypes.STRING(32), allowNull: false, unique: true },
    hashed_pass: { type: DataTypes.STRING(100), allowNull: false },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
