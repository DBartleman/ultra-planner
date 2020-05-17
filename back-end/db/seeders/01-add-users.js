'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('Users', [{
      userName: 'DemoUser',
      hashedPass: "password",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'JohnDoe',
      hashedPass: "password",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'JaneDoe',
      hashedPass: "password",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
