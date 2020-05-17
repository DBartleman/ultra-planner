'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      list_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      name: { type: DataTypes.STRING(32), allowNull: false },
      body: { type: DataTypes.STRING(400), allowNull: false },
      gif_url: { type: DataTypes.STRING(150) },
      completed: DataTypes.BOOLEAN

    */

    return queryInterface.bulkInsert('Tasks', [
    {
      list_id: 1,
      name: 'Clean out the garage',
      body: 'Put the bikes on the other side of the garage and stack the boxes so they fit completely on the shelving racks',
      gif_url: null,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      list_id: 1,
      name: 'Re-paint the house number',
      body: 'Use the can of white Rustic Hudson in the shed',
      gif_url: null,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      list_id: 1,
      name: 'Re-do the power strip',
      body: 'there shouldn\'t be a power strip plugged into another power strip, get the bigger 8-socket one to hold all the plugs',
      gif_url: null,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      list_id: 1,
      name: 'Mow the lawn',
      body: 'Make sure to plug the mower into the lower outlet, the upper one is broken',
      gif_url: null,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      list_id: 2,
      name: 'Silver Shimmer brand car wax',
      body: '',
      gif_url: null,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      list_id: 2,
      name: 'Big glove rags for washing the car',
      body: 'they\'re yellow',
      gif_url: null,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
