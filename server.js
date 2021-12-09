const express = require('express')
const path = require('path') //node native module
const { Restaurant } = require('./models/Restaurant')
const { Menu } = require('./models/Menu') 
const { Item } = require('./models/Item')
const { Chef } = require('./models/Chef')
const { Payment } = require('./models/Payment')
const { Customer } = require('./models/Customer')

const app = express()
const port = 3000
app.use(express.json())
//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
app.get('/flipcoin', (req, res) => {
    let coinflip = Math.floor(Math.random()*2)
    if (coinflip == 1){
        coinflip = 'Heads'
    } else {
        coinflip = 'Tails'
    }
    res.send(coinflip)
})

//GET method on /restaurants route returns all restaurants
app.get('/restaurants', async (req,res) => {
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allRestaurants)
})

//GET method on /restaurants route returns all restaurants parameters
app.get('/restaurants/:id', async (req,res) => {
    //find all instances of the Model Restaurant
    const thisRestaurants = await Restaurant.findByPk(req.params.id)
    //respond with allRestaurants as a json objeect
    res.json(thisRestaurants)
})

//create one restaurant
app.post('/restaurants', async (req,res) => {
    //create a restaurant using the json object passed in the request body
    let newRestaurant = await Restaurant.create(req.body)
    //respond with newRestaurants as a json objeect
    res.send(newRestaurant ?  'Restaurant created': 'post failed')
})

//update one restaurant by id
app.put('/restaurants/:id', async (req,res) => {
    //update a restaurant using the json object passed in the request body
    let updateRestaurants = await Restaurant.update(req.body, {
        where: {id: req.params.id}      
    })
    //respond with newRestaurants as a json objeect
    res.send("Restaurants updated")
})

//delete one restaurant by id
app.delete('/restaurants/:id', async (req,res) => {
    //delete the restaurant matching the request parameter id
     await Restaurant.destroy({
        where: {id: req.params.id}
     }) 
    //send string messageas response
    res.send('Restaurant deleted')
        
})

//GET method on /Menu route returns menu selections
app.get('/menu', async (req,res) => {
    //find all instances of the Model Menu
    const allMenu = await Menu.findAll()
    //respond with allMenus as a json objeect
    res.json(allMenu)
})

//GET method on /Item route returns item selections
app.get('/item', async (req,res) => {
    //find all instances of the Model Item
    const allItem = await Item.findAll()
    //respond with allItems as a json objeect
    res.json(allItem)
})

//GET method on /Chef route returns chef properties
app.get('/chef', async (req,res) => {
    //find all instances of the Model Chef
    const allChef = await Chef.findAll()
    //respond with allChefs as a json objeect
    res.json(allChef)
})

//GET method on /Payment route returns payment properties
app.get('/payment', async (req,res) => {
    //find all instances of the Model Payment
    const allPayment = await Payment.findAll()
    //respond with allPayments as a json objeect
    res.json(allPayment)
})


//GET method on /Customer route returns customer properties
app.get('/customer', async (req,res) => {
    //find all instances of the Model Customer
    const allCustomer = await Customer.findAll()
    //respond with allPayments as a json objeect
    res.json(allCustomer)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})