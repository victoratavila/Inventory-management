const axios = require('axios');

describe('CRUD products', () => {

    it('should get all registered products', async () => {
           const getProducts = await axios.get('http://localhost:8080/products');
           expect(getProducts.status).toEqual(200);
    });

    it('should post a new product', async () => {

        const postProduct = await axios.post('http://localhost:8080/create', {
            name: 'tdd',
            description: 'tdd',
            category: 'tdd',
            slug: 'tdd',
            price: 0,
            amount: 0,
            weight: 0,
            companyId: 5
        });

        expect(postProduct.status).toEqual(200);
    })

    it('should update the product created earlier', async () => {

        const postProduct = await axios.get('http://localhost:8080/search/tdd');
        const updateProduct = await axios.put('http://localhost:8080/update/' + postProduct.data.id, {
            name: 'tdd',
            description: 'tdd',
            slug: 'tdd',
            price: 0,
            amount: 0,
            weight: 0,
            companyId: 5
        });

        expect(updateProduct.status).toBe(200);
        expect(updateProduct.data).not.toBe(null);

    });

    it('should delete the product created previously', async () => {

        const postProduct = await axios.get('http://localhost:8080/search/tdd');
        const deleteProduct = await axios.delete('http://localhost:8080/delete/' + postProduct.data.id);
        
        expect(deleteProduct.status).toBe(200);
       
    })
    

});


