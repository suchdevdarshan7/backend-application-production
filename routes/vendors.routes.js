const express = require('express');
const router = express.Router();

// const  = require('../controller/vendor.controller.js');
const { createVendor, } = require('../controller/vendorOnboarding.controller.js');
const { getVendorById } = require('../controller/vendor.controller.js');

router.route('/').post(createVendor);


router.route('/:id').get(getVendorById);



module.exports = router;