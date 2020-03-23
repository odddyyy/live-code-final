'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {
          username: 'User1',
          password: '12345',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'User2',
          password: '12345',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'User3',
          password: '12345',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
