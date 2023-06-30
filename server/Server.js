const express = require('express')
const mongoose=require('mongoose')
const loginRouter = require('./src/Routes/loginRouter')
const UserregRouter = require('./src/Routes/UserregRouter')
const bodyParser = require('body-parser')
const medicinecatgoryRouter = require('./src/Routes/medicinecategoryRouter')
const addmedicineRouter = require('./src/Routes/addmedicineRouter')
const assigndeliveryboyRouter = require('./src/Routes/assigndeliveryboyRouter')

const app = express()
app.use(bodyParser())
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use('/login',loginRouter)
app.use('/register',UserregRouter)
app.use('/category',medicinecatgoryRouter)
app.use('/addmedicine',addmedicineRouter)
app.use('/add',assigndeliveryboyRouter)





const mongoDBurl='mongodb+srv://vishnup4ever:vishnup4ever@cluster0.lqhrtkp.mongodb.net/pharmacist?retryWrites=true&w=majority'
mongoose.connect(mongoDBurl).then(() =>{
    app.listen(5000,() =>{
        console.log("Server Started");
    })
}).catch((error)=>{
    console.log(error);
})
