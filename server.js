import express from "express";
import cors from "cors";
import { config } from 'dotenv'
import productsRoute from './routes/products.js'
config()


const app = express()
const port = +process.env.PORT || 8001


app.use(cors())
app.use(express.static( 'public' ))
app.use('/products', productsRoute)


app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})