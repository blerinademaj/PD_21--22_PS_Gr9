const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
    try {
        // console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return next(new HttpError("Not Authenticated", 401));
        }
        const decodedToken = jwt.verify(token, process.env.APP_SECRET);
        req.userData = { uuid: decodedToken.uuid };
    } catch (error) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    next();
};

module.exports = checkAuth;
