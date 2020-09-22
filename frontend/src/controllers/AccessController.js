const axios = require('axios');

module.exports = {


    async getAllowed(req, res){
       
        const fixedCompanyId = 5;
        axios.get('http://localhost:8080/user/' + fixedCompanyId).then((users) => {
            const data = users.data;
            res.render('Access', { fixedCompanyId, data });
        }).catch((err) => {
            console.log(err);
        });
        
    },

    async createUser(req, res){
        const { username, email, password, companyId } = req.body;
        var { admin } = req.body; 

        if(admin == 'Sim'){
            admin = true;
        } else {
            admin = false;
        }

        await axios.post('http://localhost:8080/user', {
            username: username,
            email: email,
            password: password,
            companyId: companyId,
            admin: admin
        }).then(() => {
            res.redirect('/acessos');
        }).catch((err) => {
            console.log(err);
        })
        
    },

    async deleteUser(req, res){

        const { id } = req.params;

        axios.delete(`http://localhost:8080/user/${id}`).then(() => {
            res.redirect('/acessos');
        }).catch((err) => {
            console.log(err);
        })

    }
}