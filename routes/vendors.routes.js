const express = require('express');
const router = express.Router();

const { createVendor } = require('../controller/vendor.controller.js');
const { GetVendorOnBoarding } = require('../controller/vendorOnboarding.controller.js');

router.route('/').post(createVendor);

router.route("/home").get(GetVendorOnBoarding);


module.exports = router;