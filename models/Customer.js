//models go here

const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
//create model for Custoer in our database
class Customer extends Model {
//add query methods here
}
//create attributes for model using init method
Customer.init({
    
    payment_type: DataTypes.STRING,
    
    customer_name: DataTypes.STRING
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Customer};