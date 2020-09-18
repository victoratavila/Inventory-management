const axios = require('axios');
const slugify = require('slugify');

module.exports = {

        async getProducts(req, res){

        res.redirect('/produtos/1');

    },

    async createProduct(req, res){

        const { name, description, category, price, amount, weight, companyId } = req.body

        var slugName = slugify(name, {
            replacement: '-', 
            lower: true, 
        })

        await axios.post('http://localhost:8080/create', {
            name: name,
            description: description,
            category: category,
            price: parseFloat(price),
            amount: amount,
            weight: parseFloat(weight), 
            companyId: companyId,
            slug: slugName
        }).then((result) => {
            res.redirect('http://localhost:3000/produtos/1');
        }).catch((err) => {
            console.log(err);
        })
    },

    async pagination(req, res){
        var page = req.params.num;
        
        await axios.get('http://localhost:8080/page/'+page, {

        }).then((products) => {

            axios.get('http://localhost:8080/products').then((response) => {

                var size = response.data.extraData[1];
                var productList = products.data.response.rows;
                var page = products.data.page;
                var nextPage = products.data.next;
                var fixedCompanyId = 5;

    
                res.render('Page.ejs', { productList, fixedCompanyId, size, nextPage, page })

            }).catch((err) => {
                console.log(err);
            })
            
           

         }).catch((err) => {
             console.log(err);
         })
    },

    async deleteProduct(req, res){

        const { id } = req.params;
        
        await axios.delete(`http://localhost:8080/delete/${id}`).then(() => {
            res.redirect('/produtos/1');
        }).catch((err) => {
            console.log(err);
        })

    }, 
    
        async foundProduct(req, res){

        const slug = req.params.slug;

     
        axios.get(`http://localhost:8080/search/${slug}`).then((products) => {

            var data = products.data;
            var fixedCompanyId = 5;

            axios.get('http://localhost:8080/products').then((response) => {

                var size = response.data.extraData[1];
                // var productList = products.data.response.rows;
                // var page = products.data.page;
                // var nextPage = products.data.next;
          
                if(data == null || data == " "){
                    res.render('notFoundProduct.ejs', {slug, size});
                 } else {
                     res.render('foundProduct.ejs', { data, fixedCompanyId, size });
                 }
       

            }).catch((err) => {
                console.log(err);
            })

  
        }).catch((err) => {
            console.log(err);
        });

     
    }

    // async searchBySlug(req, res){

    //     const { slug } = req.params;

    //     var fixedCompanyId = 5;
        
    //     axios.get(`http://localhost:8080/search/${slugName}`).then((productList) => {
    //         if(productList == null){
    //             res.redirect('/produtos/1');
    //         } else {
    //             res.render('FoundProduct.ejs', { productList, fixedCompanyId});
    //         }
    //     }).catch((err) => {
    //         console.log(err);
    //     })


    // } 

};