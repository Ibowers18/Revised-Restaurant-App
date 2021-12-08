//models go here

const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
//create model for Payments in our database
class Payment extends Model {
//add query methods here
}
//create attributes for model using init method
Payment.init({
    payment_id: DataTypes.INTEGER,
    payment_type: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    item_name: DataTypes.STRING
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Payment};