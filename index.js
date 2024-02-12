require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddlewares = require('./middlewares/error')
const authRoute = require('./routes/auth-routes')
const app = express()

app.use(cors())
app.use(express.json())

app.use('./auth' , authRoute)

app.use(notFound)

app.use(errorMiddlewares)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))