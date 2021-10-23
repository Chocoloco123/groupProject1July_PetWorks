'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {username: 'Freddie', firstName: 'Fred', lastName: 'Dinklage', emailAddress: 'freddieD@gmail.com', hashedPassword: 'ABC123abc', createdAt: '2015-01-31', updatedAt: '2015-11-22'},
     {username: 'kittyLover', firstName: 'kat', lastName: 'pretters', emailAddress: 'imacat@gmail.com', hashedPassword: '123abcABC', createdAt: '2015-04-30', updatedAt: '2015-05-22'},
     {username: 'iwalkdogs', firstName: 'argyle', lastName: 'the squid', emailAddress: 'imactuallyasquid@mac.com', hashedPassword: '135abcABC', createdAt: '2017-04-22', updatedAt: '2017-04-22'},
     {username: 'thispersonlikesbirds', firstName: 'birdie', lastName: 'mcgoo', emailAddress: 'birdfeathers@hotmail.com', hashedPassword: 'ABC135abc', createdAt: '2017-11-05', updatedAt: '2019-11-05'},
     {username: 'fishermanJoe', firstName: 'Joe', lastName: 'Fisherman', emailAddress: 'joe@fisherman.fish', hashedPassword: 'abc12345ABC', createdAt: '2017-04-14', updatedAt: '2019-04-14'}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
