const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    register: (req, res) => {
        const user = new User(req.body);
        user
        .save()
        .then(() => {
            res.json({ msg: "User created!", user: user});
        }) 
        .catch(err => res.status(400).json(err));
        },

    login(req, res) {
        User.findOne({ email: req.body.email })
        .then(user => {
        if (user === null) {
            res.status(400).json({ msg: "Invalid login attempt"});
        } else {

        bcrypt
        .compare(req.body.password, user.password)

        .then(passwordIsValid => {
        if (passwordIsValid) {
        res.cookie("usertoken",
        jwt.sign({ _id: user._id}, process.env.JWT_SECRET),
        {
            httpOnly: true,
            expires: new Date(Date.now() + 900000000),
        })
        .json({
            msg: "success!",
            userLogged: {
            username: `${user.firstName} ${user.lastName}`,
        }
        });
        } else {
            res.status(400).json({ msg: "Invalid login attempt"});
        }
        })

        .catch(err => 
        res.status(400).json({ msg: "Invalid login attempt" })
        );
        }
        })
        .catch(err => res.json(err));
    },

    logout(req, res) {
        res.clearCookie("usertoken");
        res.json({ msg: "usertoken cookie cleared"});
    },

    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });

        User.findById(decodedJWT.payload._id)
        .then(user => res.json(user))
        .catch(err => res.json(err));
    }
    
}