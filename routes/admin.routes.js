const express = require('express');
const router = express.Router();
const { GetAllUsers, GetAllVendors, RemoveUser, RemoveVendor } = require('../controller/admin.controller.js')


router.route('/users').get(GetAllUsers)

router.route('/users/:slug').delete(RemoveUser);


router.route('/vendors').get(GetAllVendors)

router.route('/vendors/:slug').delete(RemoveVendor);

module.exports = router;