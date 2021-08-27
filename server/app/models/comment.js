module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
    
      owner: DataTypes.STRING,
      postId: DataTypes.INTEGER,
      texto: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      
      
    });
  
    return Comment;
  }