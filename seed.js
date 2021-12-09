const {sequelize} = require('./db')
//const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
const {Restaurant} = require('./models/Restaurant')
const {Menu} = require('./models/Menu')
const {Item} = require('./models/Item')
const {Chef} = require('./models/Chef')
const {Payment} = require('./models/Payment')
const {Customer} = require('./models/Customer')


//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedRestaurant = [
  {
    name: 'AppleBees',
    location: 'Texas',
    cuisine: 'FastFood,'
  }, 
  {
    name: 'LittleSheep',
    location: 'Dallas',
    cuisine: 'Hotpot',
    
  },
  {
    name: 'Spice Grill',
    location: 'Houston',
    cuisine: 'Indian',
    
  },
  {
    name: 'burgetking',
    location: 'Dallas',
    cuisine: 'Hotpot',
    
  },
  {
    name: 'MCDS',
    location: 'Dallas',
    cuisine: 'Hotpot',
    
  },
]

 const seedMenu = [
     {
    // entree_id: 1001,
   // entree_name: "Bar-B-Que",
   // price: 19.99
     
      //menu_id: 1,
      menu_type: "Main"
     },
     {
    // entree_id: 1002,
    // entree_name: "Jerk Chicken",
    // price: 12.99

    // menu_id: 2,
     menu_type: "Take Out"

    },
    {    
    //entree_id: 1003,
    //entree_name: "Greek Salad",
    //price: 9.99

   // menu_id: 3,
    menu_type: "Catering"

    },
 ]

const seedItem = [
  {
  vegan: 0,
  item_name: "Bar-B-Que",
  price: 9.50,  
  //item_id: 101
  },
  {
  vegan: 0,
  item_name: "Jerk Chicken",
  price: 1.99,  
 //item_id: 201    
  },
  {
  vegan: 1,
  item_name: "Pastry",
  price: 6.99,  
  //item_id: 301   
  },
  
 ]  

 const seedChef = [
  {
  //chef_id: 1111,
  chef_name: "Pierce",
  salary: 65000,  
  speciality_name: "Bar-B-Que"
  },
  {
  //chef_id: 2222,
  chef_name: "Kandance",
  salary: 65500, 
  speciality_name: "Jerk Chicken"    
  },
  {
  //chef_id: 3333,
  chef_name: "Kyle",
  salary: 55000,  
  speciality_name: "Pastry"   
  },
  
 ]  

 const seedPayment = [
  {
 // payment_id: 50,
  payment_type: "Cash",
  customer_id: 501,  
  speciality_name: "Bar-B-Que"
  },
  {
  //payment_id: 60,
  payment_type: "Card",
  customer_id: 601, 
  speciality_name: "Jerk Chicken"    
  },
  {
  //payment_id: 70,
  payment_type: "Check",
  customer_id: 701,  
  speciality_name: "Pastry"   
  },
  
 ]  

 const seedCustomer = [
  {
  //customer_id: 50,
  payment_type: "Cash",
  item_id: 501,  
  customer_name: "Irene"
  },
  {
  //customer_id: 60,
  payment_type: "Card",
  item_id: 601, 
  customer_name: "Devetta"    
  },
  {
 // customer_id: 70,
  payment_type: "Check",
  item_id: 701,  
  customer_name: "Lynett"   
  },
  
 ]  
//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
    await Menu.bulkCreate(seedMenu, {validate: true}) 
    await Item.bulkCreate(seedItem, {validate: true})
    await Chef.bulkCreate(seedChef, {validate: true})
    await Payment.bulkCreate(seedPayment, {validate: true})
    await Customer.bulkCreate(seedCustomer, {validate: true})



    // await Item.bulkCreate(seedItem, {validate: true})
    console.log('Seeding success!')
      sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })