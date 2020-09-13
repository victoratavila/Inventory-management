const Products = require('../models/Products');
const Companies = require('../models/Companies');
const slugify = require('slugify');

module.exports = {


    // Function to get all registered products

    async getProducts(req, res) {
        await Products.findAll({
            order: [
                ['id', 'DESC']
            ]
        }).then((products) => {

            if(products == null){
                return 'There is no registered products';
            } else {
                
                var totalPrice = products.reduce(getTotal, 0);

                function getTotal(total, item){
                     var calc = total + (item.price * item.amount);
                     return calc;
                };

                var availableProducts = products.reduce(getAvailable, 0);
                function getAvailable(total, item){
                    var calc2 = total + (item.amount);
                    return calc2;
                }

                const extraData = [

                { totalPrice: totalPrice }, 

                { registeredProducts: products.length }, 
                
                {availableProducts: availableProducts }
            
                
                ]

                res.json({products: products, extraData});
            }

        }).catch((err) => {
            console.log(err);
        })
    },

    async searchById(req, res){
        
        const { id } = req.params;

        Products.findOne({
            where: {
                id: id
            }
        }).then((product) => {
            if(product == null) {
                res.status(400);
            } else {
                res.json(product);
            }
        }).catch((err) => {
            console.log(err);
        })
    },

    // Function to create new products

    async createProduct(req, res) {
        var { name, description, category, slug, price, amount, weight, companyId } = req.body;

          Companies.findOne({ where: { id: companyId }}).then((data) => {

            if(data != undefined){

                Products.create({
                name: name,
                description: description,
                category: category,
                slug: slug,
                price: price,
                amount: amount,
                weight: weight,
                companyId: companyId

            }).then(() => {
                res.json({result: 'Product successfully created'});
            }).catch((err) => {
                console.log(err);
            })

    } else {

        res.json({result: `There is none registered company related to the id ${companyId} `})

    }}).catch((err) => {
        console.log(err);
    });

    },
 
    // Function to search products by name

    async searchByName(req, res){
        var name = req.params.slug;

        var slugName = slugify(name, {
            replacement: '-', 
            lower: true, 
        })

        await Products.findOne({
            where: {
                slug: slugName
            }
        }).then((product) => {

        res.json(product);

        }).catch((err) => {
            console.log(err);
        })
    },

    // Function to delete products by id

    async deleteProduct(req, res){
        var id = req.params.id;

        await Products.findOne({
            where: {
                id: id
            }
        }).then(product => {

            if(product == null){
                res.status(400).json({result: "There is no product related to this id"});
            } else {
                Products.destroy({
                    where: {
                        id: id
                    }
                    
                }).then(() => {
                    res.json({result: `The product ${product.name} was successfully deleted`});
                }).catch((err) => {
                    console.log(err);
                })
            }
        }).catch((err) => {
            console.log(err);
        })
    },

    // Function to update product data

    async updateProduct(req, res){
        var id = req.params.id;
      
        Products.findOne({

            where: { id: id  }

        }).then((product) => {

            if(product == null){
                res.status(400).json({result: "There is no product related to this id to be updated"});
            } else {

                var name = req.body.name;

                var slug = slugify(name, {
                    replacement: '-', 
                    lower: true, 
                })

                Products.update({
                    name: name,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price,
                    amount: req.body.amount,
                    weight: req.body.weight,
                    slug: slug,
                }, {where: {id: id}}

                ).then(() => {
                    res.json({result: `The product ${product.name} was successfully updated`});
                }).catch((err) => {
                    console.log(err);
                })
            }

        }).catch((err) => {
            console.log(err);
        })
    },

    async updateAmount(req, res){
        var id = req.params.id;
        const amount = req.body.amount;

        await Products.findOne({
            where: { id: id }
        }).then((product) => { 

            if(product == null ){
                res.status(400).json({result: "There is no product related to this id to be updated"});
            } else {
                Products.update({

                    name: product.name,
                    description: product.description,
                    category: product.category,
                    price: product.price,
                    slug: product.slug,
                    amount: amount,
                    weight: product.weight
                   
                }, { where: { id: id} }
                ).then(() => {
                    res.json({result: `The amount field of the product ${product.name} was successfully updated`});
                }).catch((err) => {
                    console.log(err);
                })
            }

        }).catch((err) => {
            console.log(err);
        })
    },

    async reportData(req, res){
       Products.findAll().then((products) => {

           var registeredProducts = products.length;
           res.json({registeredProducts: registeredProducts});

       }).catch((err) => {
           console.log(err);
       })
    },

    async searchByCompanyId(req, res){
        const { companyId } = req.params;

        Products.findAll({where: { companyId : companyId }}).then((products) => {
            if(products == null || products == '[]' || products == undefined || products == ''){
                console.log(products)
                res.json({result: "The company " + companyId + " have no registered products yet"});
            } else {
                res.json(products);
            }
        }).catch((err) => {
            console.log(err);
        })
    },

    async pagination(req, res) {

       var page = req.params.num;
       var offset = 0;

       if(isNaN(page) || page == 1){
           offset = 0;
       } else {
           offset = (parseInt(page) -1 ) * 6;
       }

       await Products.findAndCountAll({
           limit: 6,
           offset: offset,
           order: [
            ['id', 'DESC']
        ],
       }).then((products) => {
           var next;

           if(offset + 6 >= products.count){
               next = false;
           } else {
               next = true;
           }
       
           var result = {
               page: parseInt(page),
               next: next,
               response: products
           }

           res.json(result);
       });
   
    }
}



