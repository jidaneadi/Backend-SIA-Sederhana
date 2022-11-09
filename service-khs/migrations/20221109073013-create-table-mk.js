'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("mata_kuliah", {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      nama_mk : {
        type : Sequelize.STRING,
        allowNull : false
      }, 
      id_prodi : {
        type : Sequelize.INTEGER,
        allowNull : false
      }
    });
    await queryInterface.addConstraint('mata_kuliah',{
      type: 'foreign key',
      name: 'ID_MATA_KULIAH',
      fields: ['id_prodi'],
      references: {
        table: 'prodi',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("mata_kuliah");
  }
};
