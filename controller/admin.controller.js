const Roles = require('../models/vendorDetails.model.js');

const AddRoles = async (req, res, next) => {
    const roles = req.body;

    try {
        const roles = await Roles.create(req.body);
        res.status(200).json({ message: "Working", roles, status: "success" })
    }
    catch (err) {
        next(err);
    }
}

module.exports = { AddRoles };