const Users = require("../models/users.model.js");
const Vendors = require('../models/vendors.model.js');


const GetAllUsers = CatchAsync(async (req, res, next) => {
    const users = await Users.find();

    res.status(200).json({ status: "success", users })
})

const GetAllVendors = CatchAsync(async (req, res, next) => {
    const vendors = await Users.find({});
    res.status(200).json({ status: "success", vendors })
})


const RemoveVendor = CatchAsync(async (req, res, next) => {
    const { id } = req.params; // Extract `id` from `req.params`

    if (!id) {
        throw new Error("Vendor Id Doesn't exists");
    }

    const removeVendor = await Vendors.deleteOne({ _id: id });

    if (removeVendor.deletedCount === 0) {
        return res.status(404).json({
            success: false,
            message: "Vendor not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Vendor removed successfully",
    });
});


const RemoveUser = CatchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        throw new Error("Users Id Doesn't exists");
    }

    const removeUser = await Users.deleteOne({ _id: id });

    if (removeUser.deletedCount === 0) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "User removed successfully",
    });
})

