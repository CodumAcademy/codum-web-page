'use strict';
require('dotenv').config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const data = [
        {
          id: 1,
          answer: "Javascript",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          answer: "PHP",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          answer: "Ruby",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          answer: "Python",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          answer: "Otro",
          isSuccessAnswer: true,
          allowAddicionalText: true,
          quizQuestionId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 6,
          answer: "Menos de 6 meses",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          answer: "Entre 6 meses y 1 año",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          answer: "Entre 1 y 2 años",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          answer: "Más de 2 años",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 10,
          answer: "Android",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 11,
          answer: "IOS",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          answer: "Linux/Servidores",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 13,
          answer: "¿Algun framework? Cúal",
          isSuccessAnswer: true,
          allowAddicionalText: true,
          quizQuestionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          answer: "Udacity",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 15,
          answer: "Udemy",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 16,
          answer: "Threehouse",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 17,
          answer: "Platzi",
          isSuccessAnswer: true,
          allowAddicionalText: false,
          quizQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 18,
          answer: "¿Otra?",
          isSuccessAnswer: true,
          allowAddicionalText: true,
          quizQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ];
      return queryInterface.bulkInsert('QuizAnswers', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QuizAnswers', null, {});
  }
};
