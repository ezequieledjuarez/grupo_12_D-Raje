module.exports = (sequelize, dataTypes) => {

    let alias = 'Carts'

    let cols = {
        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        idUser:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },

        cantidad:{
            type: dataTypes.INTEGER(11)
        },

        total:{
            type: dataTypes.DECIMAL(8,2)
        }

    }

    let config = {
        tablename : 'carts'
    }

    const Cart = sequelize.define(alias,cols,config)

    Cart.associate = function(models){
        Cart.belongsTo(models.Users,{
            as:'user',
            foreignKey: 'idUser'
        }),

        Cart.belongsToMany(models.Products,{
            as:"products",
            through: "productXCart",
            foreignKey:"idCart",
            otherKey:"idProduct",
            timestamps:false
        })
    }
    
    return Cart
}