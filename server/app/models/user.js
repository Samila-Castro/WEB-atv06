module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
    //   id: DataTypes.INTEGER,  
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      
    });
  
    return User;
  }