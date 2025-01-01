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
const AdminRouter = require('./routes/admin.routes.js');
const env = app.get('env');

//! Built in middleware's

app.use(express.json())
app.use(cors())

//! Routing :

app.use('/loadingpage', LandingRouter);
app.use('/roles', RolesRouter);
app.use('/users', userRouter);
app.use('/vendors', vendorRouter);
app.use('/admin', AdminRouter);

app.all('*', (req, res, next) => {
    res.status(404).json({ status: "Failed", message: "Page Not Found" })
})

//! Global error controller

app.use(globalErrorHandler);

app.listen(PORT, '127.0.0.1', () => {
    console.log(`The server is running in port ${PORT}`)
    connectDB();
})



app.listen()