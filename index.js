const {sequelize, DataTypes, Model} = require('./db')

//import models

const { Customer } = require('./models/Customer')
const {Payment} = require('./models/Payment')

//const { sequelize } = require('.db/')
//associate models 

//adds foreign key to musician table connecting a customer instance to a payment

Customer.belongsTo(Payment)
Payment.hasMany(Customer)

//const {Menu} = require ('./models/Menu')

//export models with added associations
module.exports = {Customer,Payment,sequelize}