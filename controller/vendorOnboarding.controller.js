
const Roles = require('../models/VendorDetails.model.js')

const GetVendorOnBoarding = async (req, res, next) => {
    try {
        const data = await Roles.find();

        if (data.length === 0) {
            throw new Error("Vendor data is empty!");
        }

        res.status(200).json({ message: "success", data, status: "success" });
    } catch (err) {
        err.message = err.message || "Unable to get Vendor details!";
        next(err)
    }
};




module.exports = { GetVendorOnBoarding };
