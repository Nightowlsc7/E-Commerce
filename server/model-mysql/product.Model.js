const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const porducts = sequelize.define('prod', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER
      
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull :false
    },
    description: {
        type: DataTypes.STRING,
        allowNull :false
      },
    colours: {
      type: DataTypes.STRING,
      allowNull :false
    },
    size: {
        type: DataTypes.STRING,
        allowNull :false
      },
  });
  return porducts
}