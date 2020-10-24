module.exports = (sequelize, dataTypes) => {

    let alias = 'Products'

    let cols = {
        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoincrement: true,
            allowNull: false,
            primaryKey: true
        },

        nombre:{
            type: dataTypes.STRING(128),
            allowNull: false
        },

        marca:{
            type: dataTypes.STRING(128),
            allowNull: false
        },

        descripcion:{
            type: dataTypes.STRING(256),
            allowNull: false
        },

        precio:{
            type: dataTypes.DECIMAL(8,2).UNSIGNED,
            allowNull: false
        },

        descuento:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        },

        image: {
            type: dataTypes.STRING(128),
            defaultValue: null
        },

        estado: {
            type: dataTypes.STRING(45),
            allowNull: false,
            defualtValue: 'sin-estado'
        },

        categoria:{
        type: dataTypes.STRING(128),
        allowNull: false,
        }
    }

    let config = {
        tablename = 'products',
        timestamps = true
    }

    const Product = sequelize.define(alias,cols,config)

    Product.associate = (models.Carts,{
        as:'carts',
        through: "productXCart",
        foreignKey:"idProduct",
        otherKey:"idCart",
        timestamps:false
    })
    return Product
}