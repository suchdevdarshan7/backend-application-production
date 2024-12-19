const Vendors = require('../models/vendors.model.js');


const checkVendors = async (phone) => {

    const checkVendor = await Vendors.find({ phone });
    if (checkVendor) {
        return true;
    }
    return false;
}


const createVendor = async (req, res, next) => {

    const vendor = req.body;

    const { phone } = vendor;
    try {

        if (!checkVendors(phone)) {
            const AddVendor = await Vendors.create(vendor);

            return res.status(201).json({ message: "Vendor created succesfully!", status: "success", vendor: AddVendor });
        }

        throw new Error("Vendor already Exists");

    }
    catch (err) {
        err.status = 500;
        next(err);
    }
}

module.exports = { createVendor };


