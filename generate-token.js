const jwt = require("jsonwebtoken");

const secret = process.env.APP_SECRET;

const generateToken = (data, time) => {
    console.log("qetu secret ",secret)
    return jwt.sign(data, secret, { expiresIn: time });
};


module.exports = generateToken;
