const { response } = require("express");
const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

async function userDetails(req, res) {
    try {
        const token = req.cookies.token || ""

        const user = await getUserDetailsFromToken(token)
        
        return res.status(200).json({
            message: 'User Details',
            data: user
        })

    } catch(error) {
        return response.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = userDetails;