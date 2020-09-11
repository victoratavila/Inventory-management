// const User = require('../models/Users');
// const jwt = require('jsonwebtoken');
// const jwtSecret = 'awdrgyjilpwadrgfyhugjuiok';


// module.exports = {

//     async validation(req, res){
//     const { email, password } = req.body;

//         if(email != undefined){

//             await User.findOne({ where: {
//                 email: email,
//                 password: password

//             }}).then((user) => {
//                 if(user != undefined){
                   
//                     jwt.sign({companyId: user.companyId, username: user.username, email: user.email}, jwtSecret, {expiresIn: '12h'}, (err, token) => {
                      
//                         if(err){
//                             res.status(400);
//                         } else {
//                             res.json({token: token})
//                         }

//                     })

//                 } else {
//                     res.status(404).json({result: "user not found, please try again"});
//                 }
//             }).catch((err) => {
//                 console.log(err);
//             })

//     } else {
//         res.status(401);
//     }

//     }

// }