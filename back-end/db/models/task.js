'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: { type: DataTypes.STRING(32), allowNull: false },
    body: { type: DataTypes.STRING(400), allowNull: false },
    gif_url: { type: DataTypes.STRING(150) },
    completed: DataTypes.BOOLEAN
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.List, { foreignKey: "list_id" });
  };
  return Task;
};