const Users = require('../models/Users');

module.exports = {

    async createUser(req, res){
        const { username, email, password, companyId } = req.body;
        await Users.create({
            username: username,
            email: email,
            password: password,
            companyId: companyId
        }).then(() => {
            res.json({result: "New user successfully created"});
        }).catch((err) => {
            console.log(err);
        })
    },

    async searchByCompanyId(req, res){

        const { companyId } = req.params;
    
        await Users.findAll({ where: { companyId: companyId }}).then((users) => {
           if(users == null || users == '[]' || users == undefined || users == ''){
               console.log(users)
               res.json({result: "The company " + companyId + " have no registered users yet"});
           } else {
               res.json(users);
           }
        }).catch((err) => {
            res.status(400);
        })
    }
    
}