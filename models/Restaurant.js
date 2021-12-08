const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Restaurant extends Model {}

Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    restaurant_id: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
})

module.exports = {Restaurant};