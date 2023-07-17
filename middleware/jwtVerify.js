const jwt=require("jsonwebtoken");


exports.verifyJWT = (req, res, next) => {
    const authHead = req.headers.authorization;
    if (!authHead) {
        res.status(401).send('UNAUTHORIZED')
    }
    const token = authHead.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err,decoded) => {
        if (err) {
            return res.status(401).send('INVALID TOKEN')
        }
        req.decoded = decoded;
        next();
    })
}