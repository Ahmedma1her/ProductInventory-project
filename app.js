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


app.post('/api/Inventory', async (req,res) => {
try {
    const product= await Product.create(req.body)
    res.status(200).json({
        success: true,
        data: product,
        msg:"product added to database"
    })
} catch (error) {
    res.status(400).json({
        success: false,
    msg: error})
}    
})

app.get('/api/Inventory',async(req,res)=>{
    try {
        const product= await Product.find({category:"Electronics"})
          res.status(200).json({
        success: true,
        data: product,
        msg:"product found"
    })
    } catch (error) {
         res.status(400).json({
        success: false,
    msg: error})
    }
})

















app.listen(port, () => console.log(` app listening on port ${port}!`))