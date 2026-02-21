require ("dotenv").config()
const  express = require('express')
const { default: mongoose } = require("mongoose")
const app = express()
const port = (process.env.PORT||3000)
const Product= require("./models/Product")
app.use(express.json())
async function db_connection(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("database connected successfully");
        
    } catch (error) {
        console.log("Db connection error".error);
        
    }
}
db_connection();


const productRoute=require("./route/productRoute")
app.use(productRoute)

















app.listen(port, () => console.log(` app listening on port ${port}!`))