const Users = require("../models/users.model");

const createUser = async (req, res, next) => {
    const user = req.body;

    try {
        const newUser = await Users.create(user);
        res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: newUser,
        });
    } catch (err) {
        err.status = 500;
        next(err);
    }
};

module.exports = { createUser };
