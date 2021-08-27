module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
    //   id: DataTypes.INTEGER,  
      // id: DataTypes.STRING,
      owner: DataTypes.INTEGER,
      texto: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      
      
    });
  
    return Post;
  }