const express = require('express');
const { addRoles } = require('../controller/admin.controller');
const router = express.Router();


router.route('/').post(addRoles);


module.exports = router;