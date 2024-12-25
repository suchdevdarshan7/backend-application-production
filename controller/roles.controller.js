const CatchAsync = require('../utils/CatchAsync.js');
const Roles = require('./../models/Roles.model.js');

const getAllRoles = CatchAsync(
    async (req, res, next) => {
        const roles = await Roles.find({}, { imageUrl: 0, name: 0, eventsOffered: 0 });

        res.status(200).json({ status: "success", data: roles })
    }
)

module.exports = { getAllRoles };