const express = require('express');
const { createUser } = require('../controller/users.controller');
const router = express.Router();

router
    .route('/')
    .post(createUser);


module.exports = router;