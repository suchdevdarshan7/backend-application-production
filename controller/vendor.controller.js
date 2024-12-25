
const Vendors = require('../models/vendors.model.js');
const CatchAsync = require('../utils/CatchAsync.js');




const getAllVendors = CatchAsync(async (req, res, next) => {

    const vendors = await Vendors.find({});

    res.status(200).json({ data: vendors, status: "success" });

})





module.exports = { createVendor };


