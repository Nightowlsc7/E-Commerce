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
    email: {
      type: DataTypes.STRING,
      allowNull :false
    },
    password:{
      type: DataTypes.STRING,
      allowNull :false
    },
    gendre: {
      type: DataTypes.ENUM("Male","Female","None"),
         allowNull: false,
         defaultValue: "None",
    },
    location:{
      type:DataTypes.STRING,
      allowNull:true,
      defaultValue: "None"
    },
    birthDay:{
      type:DataTypes.DATE,
    allowNull:true,
  },
  phoneNumber:{
    type:DataTypes.INTEGER,
    allowNull:true,
  },
    autoTokens:{
      type: DataTypes.STRING,
      allowNull :true
    }
  });
  return User
}