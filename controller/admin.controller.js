const Users = require("../models/users.model.js");
const Vendors = require('../models/vendors.model.js');
const AppError = require("../utils/AppError.js");
const CatchAsync = require('../utils/CatchAsync.js');

const GetAllUsers = CatchAsync(async (req, res, next) => {
    const users = await Users.find();

    res.status(200).json({ status: "success", users })
})

const GetAllVendors = CatchAsync(async (req, res, next) => {
    const vendors = await Vendors.find({}, {});
    res.status(200).json({ status: "success", vendors })
})


const RemoveVendor = CatchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        throw new Error("Vendor Id Doesn't exists");
    }

    const removeVendor = await Vendors.deleteOne({ _id: id });

    if (removeVendor.deletedCount === 0) {
        throw new AppError("Vendor not found", 404);
    }

    return res.status(200).json({
        success: true,
        message: "Vendor removed successfully",
    });
});


const RemoveUser = CatchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        throw new AppError("Users Id Doesn't exists", 401);
    }

    const removeUser = await Users.deleteOne({ _id: id });

    if (removeUser.deletedCount === 0) {
        throw new AppError("User not found ", 404);
    }

    return res.status(200).json({
        success: true,
        message: "User removed successfully",
    });
})



module.exports = { GetAllVendors, GetAllUsers, RemoveUser, RemoveVendor };