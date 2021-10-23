'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkInsert('Answers', [
       {userId: 1, questionId: 1, answer: 'Use treats to lure them down'},
       {userId: 2, questionId: 2, answer: 'Royal Canin is a good brand, they use fresh ingredients!'},
       {userId: 3, questionId: 3, answer: 'Use BabyKitty brand!'},
       {userId: 4, questionId: 4, answer: 'Yes, some cats need to be washed regularly, but you should let mothers bathe their babies, especially newborns'},
       {userId: 5, questionId: 5, answer: ''},
       {userId: 4, questionId: 6, answer: ''},
       {userId: 5, questionId: 7, answer: ''},
       {userId: 3, questionId: 8, answer: ''},
       {userId: 1, questionId: 9, answer: ''},
       {userId: 1, questionId: 10, answer: ''},
       {userId: 1, questionId: 11, answer: ''},
       {userId: 1, questionId: 12, answer: ''},
       {userId: 1, questionId: 13, answer: ''},
       {userId: 1, questionId: 14, answer: ''},
       {userId: 1, questionId: 15, answer: ''},
       {userId: 1, questionId: 16, answer: ''},
       {userId: 1, questionId: 17, answer: ''},
       {userId: 1, questionId: 1, answer: ''},
       {userId: 1, questionId: 2, answer: ''},
       {userId: 1, questionId: 3, answer: ''},
       {userId: 1, questionId: 4, answer: ''},
       {userId: 1, questionId: 5, answer: ''},
       {userId: 1, questionId: 6, answer: ''},
       {userId: 1, questionId: 1, answer: ''},
       {userId: 1, questionId: 2, answer: ''},
       {userId: 1, questionId: 3, answer: ''},
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Answers', null, {});
  }
};
