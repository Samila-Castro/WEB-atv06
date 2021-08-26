'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Comments', {
      userId: {
        
        type: DataTypes.INTEGER,
      },
      postId: {
        
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
      
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Comments');
  }
};
