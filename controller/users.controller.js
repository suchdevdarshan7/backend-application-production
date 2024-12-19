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

const LoginUser = async () => {
    const user = req.body;

    try {

        const FindUser = Users.find({ user });

        if (FindUser) {
            res.status(200).json({ message: "Logged In succesfully !", },)
        }


    }
    catch (err) {

    }
}


module.exports = { createUser };
