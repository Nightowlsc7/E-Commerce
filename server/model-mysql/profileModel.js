module.exports=(sequelize,DataTypes)=>{
  const Profile = sequelize.define('profile', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull :false
    },
    psw: {
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
  }
  });
  return Profile
}