const jwt = require('jsonwebtoken');
const jwtSecret = 'awdrgyjilpwadrgfyhugjuiok';

function auth(req, res, next){

    const authToken = req.headers['authorization'];

    if(authToken != undefined){

        const bearer = authToken.split(' ');
        const token = bearer[1];

        console.log(token);

        jwt.verify(token, jwtSecret, (err, data) => {
            if(err){
                res.status(401).json({result: 'Not allowed, please try again'})
            } else {

                req.token = token;
    
                req.loggedUser = {companyId: data.companyId, username: data.username, email: data.email}
                next();
            }
        })

    } else {
        res.json({result: 'Not allowed, please get a valid token and try again'})
        res.status(401);
    }

}

module.exports = auth;