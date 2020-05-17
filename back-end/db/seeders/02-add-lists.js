'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('Lists', [
    {
      user_id: 1,
      name: "Fix up the house",
      description: "The house is a huge mess and needs a lot of work.",
      gif_url: null,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      name: "Get car cleaning supplies at Ace Hardware",
      description: "Remember to wear a mask!",
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
    return queryInterface.bulkDelete('Lists', null, {});
  }
};
