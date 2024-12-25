const CatchAsync = require('../utils/CatchAsync');
const LandingPage = require('./../models/LandingPage.model.js');


const getLandingPageDetails = CatchAsync(
    async (req, res, next) => {
        const LandingData = await LandingPage.find();


        res.status(200).json({ status: "success", data: LandingData })
    }
)

module.exports = { getLandingPageDetails };