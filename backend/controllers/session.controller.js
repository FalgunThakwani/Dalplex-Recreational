const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const login = async (request, response) => {
    const { email, password } = request.body;

    User.findOne({email}).then((user) => {
        if(!user) {
            return response.status(401).json({message: 'Invalid email or password'});
        }

        user.verifyPassword(password, (err, match) => {
            if(err || !match) {
                return response.status(401).json({message: 'Invalid email or password'});
            }
            const token = jwt.sign({ id: user._id, email: user.email }, process.env.APIKEY, { expiresIn: '30m' });
            return response.json({message: "OK", token: token, role: user.role, id: user._id});
        });
    }).catch((err) => {
        return response.status(500).json({ message: 'Internal server error ' + err });
    });
};

const logout = async (request, response) => {
    response.clearCookie('jwt');
    response.status(200).json({message: "OK"});
};

module.exports = {
    login,
    logout
};