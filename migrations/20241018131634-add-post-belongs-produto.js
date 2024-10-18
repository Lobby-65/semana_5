'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('produto', 'tags', {
      type: Sequelize.INTEGER,
      references: {
        model: 'produto',
        key: 'id'
      },
      onDelete: 'SET NULL'
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('produto', 'tags')
  }
};
