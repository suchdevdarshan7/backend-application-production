const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors');
const globalErrorHandler = require('./controller/error.controller.js');
const connectDB = require('./db/connect.db.js')
const PORT = process.env.PORT || 3000;
const userRouter = require('./routes/users.routes.js')

const env = app.get('env');

app.use(cors())

app.use('/api/v1/users', userRouter);




app.all('*', (req, res, next) => {
    res.status(404).json({ status: "failed", message: "Page Not Found" })
})

app.use(globalErrorHandler);


app.listen(PORT, '127.0.0.1', () => {
    console.log(`The server is running in port ${PORT}`)
    connectDB();
})



app.listen()