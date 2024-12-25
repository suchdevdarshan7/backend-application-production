const express = require('express');
const router = express.Router();

// const  = require('../controller/vendor.controller.js');
const { createVendor } = require('../controller/vendorOnboarding.controller.js');


router.route('/').post(createVendor);




module.exports = router;