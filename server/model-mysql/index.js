const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');

const connection = new Sequelize('greenfield', 'root', 'Baha1998@', {
  host: 'localhost',
  dialect:'mysql'
});


async function connectionTest (){     
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
  connectionTest()

  const db={}

db.User=require('./user.Model')(connection,DataTypes)
db.Products=require('./product.Model')(connection,DataTypes)

 //connection.sync({force:true}) 


module.exports = db;