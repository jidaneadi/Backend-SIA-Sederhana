'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dosen', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      nip : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      nama_dosen : {
        type : Sequelize.STRING,
        allowNull : true
      },
      email : {
        type : Sequelize.STRING,
        allowNull : true
      },
      alamat_dosen : {
        type : Sequelize.STRING,
        allowNull : true
      },
      no_hp : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
    });
    await queryInterface.addConstraint('dosen',{
      type : 'unique',
      fileds : ['nip'],
      name : 'UNIQUE_NIP_DOSEN'
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('dosen');
  }
};
