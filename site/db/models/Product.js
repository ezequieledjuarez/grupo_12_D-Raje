module.exports = (sequelize, dataTypes) => {

    let alias = 'Products'

    let cols = {
        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        nombre:{
            type: dataTypes.STRING(128),
            allowNull: false
            /*,
            validate:{
                isAlphaNumeric:{
                    msg: "Sólo puedes ingresar letras o números"
                },
                allowNull:{
                    msg: 'Este campo no puede quedar vacío'
                },
                notEmpty:{
                    msg: 'Este campo no puede quedar vacío'
                },
               isLength(value){
                    if(value.length > 100 || value.length < 4){
                        msg = 'El nombre debe tener al menos 4 carácteres'
                    }
                }  
            }*/
        },

        marca:{
            type: dataTypes.STRING(128),
            allowNull: false
            /*,
            isAlphaNumeric:{
                msg: "Sólo puedes ingresar letras o números"
            },
            allowNull:{
                msg: 'Este campo no puede quedar vacío'
            },
            notEmpty:{
                msg: 'Este campo no puede quedar vacío'
            },
           isLength(value){
                if(value.length > 100 || value.length < 3){
                    msg = 'El nombre debe tener al menos 3 carácteres'
                }
            } */ 
        },

        descripcion:{
            type: dataTypes.STRING(256),
            allowNull: false
            /*,
            allowNull:{
                msg: 'Este campo no puede quedar vacío'
            },
            notEmpty:{
                msg: 'Este campo no puede quedar vacío'
            },
           isLength(value){
                if(value.length > 250 || value.length < 25){
                    msg = 'El nombre debe tener al menos 4 carácteres'
                }
            }*/  
        },

        precio:{
            type: dataTypes.DECIMAL(8,2).UNSIGNED,
            allowNull: false
            /*,
            validate:{
                isFloat:{
                    msg: 'Este valor debe ser decimal'
                },
                allowNull:{
                    msg: 'Este campo no puede quedar vacío'
                },
                notEmpty:{
                    msg: 'Este campo no puede quedar vacío'
                },
                min:{
                    isMin(value){
                        if(value < 1){
                            msg: 'Este valor no puede ser menor a 1'
                        } 
                    }
                } 

            }*/
        },

        descuento:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
            /*,
            validate:{
                isFloat:{
                    msg: 'Este valor debe ser decimal'
                },
                allowNull:{
                    msg: 'Este campo no puede quedar vacío'
                },
                notEmpty:{
                    msg: 'Este campo no puede quedar vacío'
                },
                min:{
                    isMin(value){
                        if(value < 1){
                            msg: 'Este valor no puede ser menor a 0'
                        } 
                    }
                } 
            }*/
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
        tablename : 'products',
        timestamps : true
    }

    const Product = sequelize.define(alias,cols,config)

    Product.associate = function(models){
            Product.belongsToMany(models.Carts,{
            as:'carts',
            through: "productXCart",
            foreignKey:"idProduct",
            otherKey:"idCart",
            timestamps:false
        })
     }
    return Product
}