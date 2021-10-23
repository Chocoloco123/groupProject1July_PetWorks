'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Questions', [
     {userId: 1, question: 'How do you get a cat down from a high shelf?', category: 'health', petType: 'cat', likeNum: 2, createdAt: '2019-04-14', updatedAt: '2019-04-14'},
     {userId: 1, question: 'What\'s the best brand of dog food?', category: 'nutrition', petType: 'dog', createdAt: '2018-11-30', updatedAt: '2019-01-22'},
     {userId: 2, question: 'What formula to feed kittens? 2 week old', category: 'nutrition', petType: 'cat', createdAt: '2017-01-13', updatedAt: '2017-01-14'},
     {userId: 2, question: 'Can I wash cat? how old cat to shower?', category: 'health', petType: 'cat', createdAt: '2020-11-05', updatedAt: '2020-11-05'},
     {userId: 2, question: 'Where to buy best cat tuna?', category: 'nutrition', petType: 'cat', createdAt: '2020-12-31', updatedAt: '2021-01-01'},
     {userId: 2, question: 'Where can I walk cat?', category: 'activity', petType: 'cat', createdAt: '2020-10-31', updatedAt: '2020-11-14'},
     {userId: 3, question: 'Where is the best place to walk dogs?', category: 'activity', petType: 'dog', createdAt: '2021-04-22', updatedAt: '2021-04-22'},
     {userId: 3, question: 'Will dogs eat squirrel?', category: 'misc', petType: 'dog', createdAt: '2017-11-30', updatedAt: '2018-01-22'},
     {userId: 3, question: 'Can I feed my dog a puppuccino?', category: 'nutrition', petType: 'dog', createdAt: '2019-04-30', updatedAt: '2019-05-22'},
     {userId: 4, question: 'Can you train your bird to fly to you?', category: 'training', petType: 'other', createdAt: '2019-11-30', updatedAt: '2021-01-22'},
     {userId: 4, question: 'When is the ebst time to introduce your new cat to your pets?', category: 'socialization', petType: 'cat', createdAt: '2021-01-30', updatedAt: '2021-02-14'},
     {userId: 4, question: 'Will cats eat your birds when you\'re gone??', category: 'socialization', petType: 'other', createdAt: '2018-02-10', updatedAt: '2019-09-25'},
     {userId: 4, question: 'What should I do?? My dog ate a bee????', category: 'veterinary', petType: 'dog', createdAt: '2019-01-31', updatedAt: '2019-11-22'},
     {userId: 5, question: 'How to clean fish tank?', category: 'health', petType: 'other', createdAt: '2020-06-30', updatedAt: '2020-07-22'},
     {userId: 5, question: 'Best place to take dog on a walk?', category: 'activity', petType: 'dog', createdAt: '2020-08-16', updatedAt: '2021-01-22'},
     {userId: 5, question: 'Where do you go to find exotic fish?', category: 'misc', petType: 'other', createdAt: '2021-08-13', updatedAt: '2021-08-13'}
   ], {});
  },

   down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Questions', null, {});
  }
};
