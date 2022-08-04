const { DataTypes } = require("sequelize");

const Comment = (sequelize) => {
  return sequelize.define("Comment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
    },
  });
};

module.exports = Comment;
