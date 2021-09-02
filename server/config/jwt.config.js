const jwt = require('jsonwebtoken');

//theis file is used as Middleware to authemticate a user
// before we pass the request on to the  controller, we will authenticate
// the request
module.exports = {
    authenticate(req, res, next) {
        // jwt will verify that we are authorized, we will authenticate
        jwt.verify(
            //jwt will verify that we are authorized to view this route
            req.cookies.usertoken,
            //this is the key you want to use for validation - anything we want
            process.env.JWT_SECRET,
            //we can store informantion in the payload if we want
            (err, payload) =>{
                //if we do NOT pass the check, we send back a 401 Unathorized response
                if (err) {
                    res.status(401).json({ verified: false });
                } else {
                    //if we are valid, we will proceed to call the next / callback function
                    // this will continue us down the process of accessiing resources we
                    // are authorized to access
                    next();
                }
            })
    }
}