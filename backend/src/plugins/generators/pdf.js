const pdf = require ("html-pdf");
const path = require('path');
const filePath = path.join('./temp/teste112.pdf');
const ejsFile = path.join('./plugins/generators/pattern.ejs')
const axios = require('axios');
const ejs = require('ejs');

axios.get('http://localhost:8080/').then((product) => {

    ejs.renderFile(ejsFile, {product: product, test: 'true'}, (err, html) => {

        if(err) {

            console.log(err);

        } else {

        const content = html;

        pdf.create(content, {}).toFile(  filePath, (err, res) => {
          if(err){
                 console.log('Houve um erro' + err);
          } else {
                 console.log(res);
          }
            })

          }
    })

}).catch((err) => {
    console.log(err)
})






module.exports = pdf;



