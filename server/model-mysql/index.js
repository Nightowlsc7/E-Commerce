const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');

<<<<<<< HEAD

const connection = new Sequelize('greenfield', 'Amine', 'wess2004wess', {
=======
const connection = new Sequelize('greenfield', 'brahim', 'root', {
>>>>>>> 05a267c954b2e7643908b4f11c0550674e319811
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

 //connection.sync({force:true}) 


module.exports = db;