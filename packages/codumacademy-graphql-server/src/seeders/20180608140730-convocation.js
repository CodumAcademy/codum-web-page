'use strict';

require('dotenv').config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Convocations', [{
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis enim",
        fromDate: new Date("2018-06-01"),
        toDate: new Date("2018-06-30"),
        requirements: `<p><strong>Lorem Ipsum</strong>&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor:</p>
        <ul>
        <li><strong>Lorem Ipsum</strong>&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto.</li>
        <li>Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500.</li>
        <li>Cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen.</li>
        </ul>`,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Convocations', null, {});
  }
};
