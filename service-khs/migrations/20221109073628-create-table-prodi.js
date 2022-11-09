'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('progam_studi', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      nama_prodi : {
        type : Sequelize.STRING,
        allowNull : false
      }
    });
    await queryInterface.addConstraint('progam_studi', {
      type : 'unique',
      fields : ['nama_prodi'],
      name : 'UNIQUE_STUDY_NAME'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('progam_studi');
  }
};
