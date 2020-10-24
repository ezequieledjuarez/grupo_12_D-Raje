module.exports = (sequelize, dataTypes) => {

    let alias = 'ProductXCart'

    let cols = {
        idProduct:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },

        idCart:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },

        cantidad:{
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tablename : 'productxcart'
    }

    const ProductXCart = sequelize.define(alias,cols,config)

    return ProductXCart

}