const jwt = require('jsonwebtoken');
const wombat = '../wombat';

let checkToken = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1];

    if (token) {
        jwt.verify(token, wombat, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is bogus, dude.'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        return res.json({
            success: false,
            message: 'No token, no dice.'
        })
    }
};

module.exports = {
    checkToken: checkToken
}