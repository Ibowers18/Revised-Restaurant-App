//models go here

const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
//create model for Chefs in our database
class Chef extends Model {
//add query methods here
}
//create attributes for model using init method
Chef.init({
    
    chef_name: DataTypes.STRING,
    salary: DataTypes.FLOAT,
    speciality_name: DataTypes.STRING
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Chef};