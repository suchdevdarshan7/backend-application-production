import Users from "../models/users.model";

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
        next(err);
    }
};

export default createUser;
