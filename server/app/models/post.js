module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
    //   id: DataTypes.INTEGER,  
      // id: DataTypes.STRING,
      texto: DataTypes.STRING,
      
      
    });
  
    return Post;
  }