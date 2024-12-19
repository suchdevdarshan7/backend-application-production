const express = require('express');
const router = express.Router();

const { createVendor } = require('../controller/vendor.controller.js')

router.route('/').post(createVendor);


module.exports = router;