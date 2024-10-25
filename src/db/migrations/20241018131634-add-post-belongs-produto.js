'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Produtos', 'tagId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Tags',
        key: 'id'
      },
      onDelete: 'SET NULL'
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Produtos', 'tags')
  }
};
