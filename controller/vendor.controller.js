
const Vendors = require('../models/vendors.model.js');
const CatchAsync = require('../utils/CatchAsync.js');




const getAllVendors = CatchAsync(async (req, res, next) => {

    const vendors = await Vendors.find({});

    res.status(200).json({ data: vendors, status: "success" });

})

const getVendorById = CatchAsync(async (req, res, next) => {

    const { id } = req.params;

    const Vendor = await Vendors.findById(id);

    if (Vendor) {
        return res.status(200).json({ status: "sucesss", vendor: Vendor })
    }

    next(new AppError("Vendor doesn't Exists  ", 404));


})





module.exports = { getAllVendors, getVendorById };


