const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors');
const globalErrorHandler = require('./controller/error.controller.js');
const connectDB = require('./db/connect.db.js')
const PORT = process.env.PORT;
const userRouter = require('./routes/users.routes.js')
const vendorRouter = require('./routes/vendors.routes.js')
const LandingRouter = require('./routes/LandingPage.routes.js');
const RolesRouter = require('./routes/roles.routes.js')
const env = app.get('env');

app.use(express.json())

app.use(cors())


app.use('/api/v1/roles', RolesRouter);
app.use('/api/v1/landing', LandingRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/vendors', vendorRouter);



app.all('*', (req, res, next) => {
    res.status(404).json({ status: "Failed", message: "Page Not Found" })
})

app.use(globalErrorHandler);

app.listen(PORT, '127.0.0.1', () => {
    console.log(`The server is running in port ${PORT}`)
    connectDB();
})



app.listen()