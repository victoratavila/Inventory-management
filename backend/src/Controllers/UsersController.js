const Users = require('../models/Users');

module.exports = {

    async getUser(req, res){
        Users.findAll({
            order: [
                ['id', 'DESC']
            ]
        }).then((users) => {
          
            res.json(users);
        }).catch((err) => {
            console.log(err);
        })
    },

    async createUser(req, res){
        const { username, email, password, companyId, admin } = req.body;
        await Users.create({
            username: username,
            email: email,
            password: password,
            admin: admin,
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
              res.status(200);
              res.json(users);
           } else {
               res.json(users);
           }
        }).catch((err) => {
            res.status(400);
        })
    },

    async deleteUser(req, res){
        const { id } = req.params;

        Users.destroy({ where: { id: id }}).then(() => {
            res.json({result: 'user successfully deleted'});
        }).catch((err) => {
            console.log(err);
        })
    }
    
}