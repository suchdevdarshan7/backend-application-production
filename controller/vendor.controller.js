
const Vendors = require('../models/vendors.model.js');
const CatchAsync = require('../utils/CatchAsync.js');


const checkVendors = async (phone) => {

    const checkVendor = await Vendors.find({ phone });
    if (checkVendor) {
        return true;
    }
    return false;
}


const createVendor = CatchAsync(async (req, res, next) => {

    const vendor = req.body;

    const { phone } = vendor;

    if (!checkVendors(phone)) {
        const AddVendor = await Vendors.create(vendor);

        return res.status(201).json({ message: "Vendor created succesfully!", status: "success", vendor: AddVendor });
    }

    throw new Error("Vendor already Exists");
})


const getAllVendors = CatchAsync(async (req, res, next) => {

    const vendors = await Vendors.find({});

    res.status(200).json({ data: vendors, status: "success" });

})


module.exports = { createVendor };


