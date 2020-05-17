'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: { type: DataTypes.STRING(32), allowNull: false },
    description: { type: DataTypes.STRING(400), allowNull: false },
    gif_url: { type: DataTypes.STRING(150) },
    completed: DataTypes.BOOLEAN
  }, {});
  List.associate = function(models) {
    // associations can be defined here
    List.belongsTo(models.User, { foreignKey: "user_id"});
  };
  return List;
};

