const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Products = sequelize.define('prod', {
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
      color: {
      type: DataTypes.STRING,
      allowNull :false
    },
    size: {
        type: DataTypes.STRING,
        allowNull :false
      },
      category: {
        type: DataTypes.ENUM("Woman's Fashion","Men's Fashion","Electronics","Home & Lifestyle","Medicine","Sports & Outdoor","Baby's & Toys","Groceries & Pets","Health & Beauty"),
         allowNull: false,
         defaultValue: "Men's Fashion",
      },
  });
  return Products
}