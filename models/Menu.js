//models go here

const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
//create model for menu items in our database
class Menu extends Model {
//add query methods here
}
//create attributes for model using init method
Menu.init({
    
    //entree_id: DataTypes.INTEGER,
    //entree_name: DataTypes.STRING,
    //price: DataTypes.FLOAT

    menu_id: DataTypes.INTEGER,
    menu_type: DataTypes.TEXT


}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Menu};