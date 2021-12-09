//models go here

const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
//create model for  items in our database
class Item extends Model {
//add query methods here
}
//create attributes for model using init method
Item.init({
    vegan: DataTypes.BOOLEAN,
    
    item_name: DataTypes.STRING,
    price: DataTypes.FLOAT
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Item};