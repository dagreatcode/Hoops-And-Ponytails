const { Sequelize } = require("sequelize/types");

// Even Jonathan does not know how to write a model from scratch.
module.exports = (Sequelize, DataTypes) =>{
    const Things = Sequelize.define("Thing", {
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL,
        },
    });
    return Things;
};