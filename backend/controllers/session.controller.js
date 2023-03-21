const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const login = async (request, response) => {
    const { email, password } = request.body;

    User.findOne({email}).then((user) => {
        if(!user) {
            return response.status(401).json({message: 'Invalid email or password'});
        }

        console.log(JSON.stringify(user))

        user.verifyPassword(password, (err, match) => {
            console.log("Match = " + match)
            if(err || !match) {
                return response.status(401).json({message: 'Invalid email or password'});
            }
            console.log("generating token");
            const token = jwt.sign({ id: user._id, email: user.email }, process.env.APIKEY, { expiresIn: '30m' });
            console.log(token);
            return response.json({message: "OK", token: token});
        });
    }).catch((err) => {
        return response.status(500).json({ message: 'Internal server error ' + err });
    });
};

const logout = async (request, response) => {
    response.clearCookie('jwt');
    response.send(200);
};

module.exports = {
    login,
    logout
};