'use strict';
require('dotenv').config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const data = [
        {
          id: 1,
          title: "De las siguientes plataformas de estudio virtual, ¿Cuales conoces?",
          description: "lorem ipsum",
          quizId: 1,
          quizQuestionTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          title: "¿Que quisieras aprender a programar?",
          description: "lorem ipsum description",
          quizId: 1,
          quizQuestionTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          title: "¿Cúanto tiempo llevas programando?",
          description: "lorem ipsum description",
          quizId: 1,
          quizQuestionTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          title: "De los siguientes lenguajes, ¿Cuáles manejas?",
          description: "lorem ipsum description",
          quizId: 1,
          quizQuestionTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ];
      return queryInterface.bulkInsert('QuizQuestions', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QuizQuestions', null, {});
  }
};
