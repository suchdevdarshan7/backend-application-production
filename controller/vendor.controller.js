const Vendors = require('../models/vendors.model.js')

const createVendor = async (req, res, next) => {

    const vendor = req.body;
    try {

        const AddVendor = await Vendors.create(vendor);
        res.status(201).json({ message: "Vendor created succesfully!", status: "success", vendor: AddVendor })
    }
    catch (err) {
        err.status = 404;
        // err.message = "Cannot create a vendor!";
        next(err);
    }
}

module.exports = { createVendor };


