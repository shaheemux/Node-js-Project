import express from "express";
import cors from "cors";
import { config } from 'dotenv'
import productsRoute from './routes/products.js'
import usersRoute from './routes/users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
config()


const app = express()
const port = +process.env.PORT || 8001


app.use(cors())
app.use(express.json())
app.use(express.static( 'public' ))
app.use('/products', productsRoute)
app.use('/users', usersRoute) 





app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})