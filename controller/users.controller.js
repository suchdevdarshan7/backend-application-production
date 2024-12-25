const Users = require("../models/users.model");
const CatchAsync = require("../utils/CatchAsync");


const checkUserExists = async (phone) => {
    const checkUser = await Users.find({ phone });
    if (checkUser) {
        return true;
    }
    return false;
}


const createUser = CatchAsync(async (req, res, next) => {
    const user = req.body;
    const { phone } = user;

    if (!checkUserExists(phone)) {
        const newUser = await Users.create(user);
        return res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: newUser,
        });

    }
    throw new Error("User already exists!");

});

const LoginUser = CatchAsync(async () => {
    const user = req.body;
    const FindUser = await Users.find({ user });

    if (FindUser) {
        res.status(200).json({ message: "Logged In succesfully !", })
    }
}
)


module.exports = { createUser };
