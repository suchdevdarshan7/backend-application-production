
const Roles = require('../models/deprecated/vendorDetails.model.js');
const CatchAsync = require('../utils/CatchAsync.js');

const GetVendorOnBoarding = CatchAsync(async (req, res, next) => {
    const data = await Roles.find();

    if (data.length === 0) {
        throw new Error("Vendor data is empty!");
    }

    res.status(200).json({ message: "success", data, status: "success" });
});




module.exports = { GetVendorOnBoarding };
