'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Posts', {
      userId: {
        type: DataTypes.INTEGER,
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      texto: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      // password: {
      //   allowNull: false,
      //   type: DataTypes.STRING,
      // },
      // createdAt: {
      //   allowNull: false,
      //   type: DataTypes.DATE,
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: DataTypes.DATE,
      // },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Posts');
  }
};
