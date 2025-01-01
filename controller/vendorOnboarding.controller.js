const Vendors = require('../models/vendors.model.js');
const Roles = require('../models/deprecated/vendorDetails.model.js');
const CatchAsync = require('../utils/CatchAsync.js');
const AppError = require("../utils/AppError.js")


const createVendor = CatchAsync(async (req, res, next) => {

    const vendor = req.body;
    const { email, phone, name } = vendor;


    const FindVendor = await Vendors.find({
        $or: [{ email: email }, { phone: phone }]
    });


    if (FindVendor.length > 0) {
        throw new AppError("Vendor already exists", 404);
    }


    const AddVendor = await Vendors.create({ name, email, phone });

    return res.status(201).json({
        message: "Vendor created successfully!",
        status: "success",
        vendor: AddVendor
    });
});

const fireBaseAuthentication = CatchAsync(async () => {



    next();
})




module.exports = { createVendor, fireBaseAuthentication };
