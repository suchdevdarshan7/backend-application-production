const mongoose = require('mongoose');
const express = require('express');
const app = express();

const env = app.get('env');

async function connectDB(req, res) {
    try {
        if (env === "development") {
            await mongoose.connect(process.env.MONGO_URL_DEV);
            console.log(`DB Connected succesfully!`)
            return;
        }
        else if (env === "production") {
            await mongoose.connect(process.env.MONGO_URL_PROD)
            console.log(`DB Connected succesfully!`)
            return;
        }
        throw new Error("Some error occured in connecting")
    }
    catch (err) {
        console.log(err.message)
    }
}

module.exports = connectDB;