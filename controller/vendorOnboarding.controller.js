const Vendors = require('../models/vendors.model.js');
const Roles = require('../models/deprecated/vendorDetails.model.js');
const CatchAsync = require('../utils/CatchAsync.js');



const createVendor = CatchAsync(async (req, res, next) => {

    const vendor = req.body;
    const AddVendor = await Vendors.create(vendor);

    return res.status(201).json({ message: "Vendor created succesfully!", status: "success", vendor: AddVendor });

    throw new Error("Vendor already Exists");
})



module.exports = { createVendor };
