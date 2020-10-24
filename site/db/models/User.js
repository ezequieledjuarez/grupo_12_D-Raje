module.exports = (sequelize, dataTypes) => {

 let alias = 'Users'

 let cols = {

    id:{
        type: dataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nombre:{
        type: dataTypes.STRING(45),
        allowNull:false
    },
    
    apellido:{
        type: dataTypes.STRING(45),
        allowNull:false
    },

    correo:{
        type: dataTypes.STRING(100),
        allowNull:false
    },

    password:{
        type: dataTypes.STRING(45),
        allowNull:false
    },
    
    categoria:{
        type: dataTypes.STRING(45),
        allowNull:'false',
        defaultValue: 'user'
    },

    image:{
        type: dataTypes.STRING(128),
        defaultValue: 'imgDeffault.jpg'
    }
 }

 let config = {
    tablename : 'users',
    timestamps : true
 }

 const User = sequelize.define(alias,cols,config)

 User.associate = function(models){
     User.hasOne(models.Carts,{
         as: 'carts',
         foreignKey: 'idUser'
     })
 }
 
 return User
}