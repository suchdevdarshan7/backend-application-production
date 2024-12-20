const Users = require("../models/users.model");


const checkUserExists = async (phone) => {
    const checkUser = await Users.find({ phone });
    if (checkUser) {
        return true;
    }
    return false;
}


const createUser = async (req, res, next) => {
    const user = req.body;
    const { phone } = user;

    try {
        if (!checkUserExists(phone)) {
            const newUser = await Users.create(user);
            return res.status(201).json({
                success: true,
                message: "User created successfully!",
                data: newUser,
            });

        }
        throw new Error("User already exists!");

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
