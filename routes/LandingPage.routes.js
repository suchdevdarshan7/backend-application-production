const express = require("express");
const router = express.Router();
const { getLandingPageDetails } = require('./../controller/LandingPage.controller.js')

router.route('/').get(getLandingPageDetails)


module.exports = router;