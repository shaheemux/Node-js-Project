import express from "express";
import cors from "cors";
import anythingRoute from './routes/anything.js'


const app = express()

app.use(express.static( 'public' ))
app.use('/anything', anythingRoute)

app.listen(5000, ()=> {
    console.log('http://localhost:5000')
})