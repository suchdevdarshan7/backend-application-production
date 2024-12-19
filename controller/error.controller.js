module.exports = (err, req, res, next) => {
    console.log(err)
    res.status(err.status).json({ status: "Failed", message: err.message });
}

