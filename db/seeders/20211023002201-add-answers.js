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
       {userId: 5, questionId: 5, answer: 'Cat tuna is sold at PetCo, but there are some good retailers online'},
       {userId: 4, questionId: 6, answer: 'Cats like to walk in the forest, where they can explore freely'},
       {userId: 5, questionId: 7, answer: 'You should walk your dog at Johnson Park! There\'s a big open field for them to run around and play in!'},
       {userId: 3, questionId: 8, answer: 'If left unattended, dogs will try to catch squirrels. My dog ate a squirrel once that wasn\'t fast enough to get away'},
       {userId: 1, questionId: 9, answer: 'Dogs can eat a little bit of cream, but they might get diarrhea'},
       {userId: 1, questionId: 10, answer: 'You can try to train your bird, but only some breeds are receptive to training'},
       {userId: 1, questionId: 11, answer: 'Cats are territorial, so it\'s best to introduce new animals to them slowly, and adjust them to the new animal'},
       {userId: 1, questionId: 12, answer: 'Keep your birds in their cages so cats can\'t get to them'},
       {userId: 1, questionId: 13, answer: 'You\'re dog will be fine if they eat a bee, even if they get stung'},
       {userId: 1, questionId: 14, answer: 'Fish filters are great for cleaning, but you should always replace the water every month to make sure they have clean water'},
       {userId: 1, questionId: 15, answer: 'Dogs love walking anywhere'},
       {userId: 1, questionId: 16, answer: 'Exotic fish are usually found at specialty retailers, but you can find themjusta bout anywehre, if you know hwere to look'},
       {userId: 1, questionId: 1, answer: 'Call their name and use their favorite toys to lure them down'},
       {userId: 1, questionId: 2, answer: 'My dog loves Blue Buffalo, they use all meat ingredients and no artificial stuff'},
       {userId: 1, questionId: 3, answer: 'Very young kittens rely on mother\'s milk, but store bought is ok'},
       {userId: 1, questionId: 4, answer: 'You should never wash a cat, they do it themselves'},
       {userId: 1, questionId: 5, answer: 'Cats are vegetarian, you sohuldn\'t feed them fish'},
       {userId: 1, questionId: 6, answer: 'Cats love to walk in tall grass'},
       {userId: 1, questionId: 1, answer: 'Leave them there until they try to get down themselves'},
       {userId: 1, questionId: 2, answer: 'My favorite brand is Whet Fhood, they saved my dog\'s life'},
       {userId: 1, questionId: 3, answer: 'The best formula for kittens is Mother\'s Milk'},
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
