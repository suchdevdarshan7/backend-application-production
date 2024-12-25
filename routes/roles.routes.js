const express = require('express');
const router = express.Router();
const { getAllRoles } = require('../controller/roles.controller.js');

router.route('/').get(getAllRoles);





module.exports = router;