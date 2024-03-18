const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull :false
    },
    psw: {
      type: DataTypes.STRING,
      allowNull :false
    },
  });
  return User
}