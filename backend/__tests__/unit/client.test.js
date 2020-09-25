const axios = require('axios');

describe('CRUD clients', () => {

    it('should get all clients', async () => {
        const getClients = await axios.get('http://localhost:8080/clients/5');
        expect(getClients.status).toBe(200);
    })

    it('should create a new client', async () => {
        const postClient = await axios.post('http://localhost:8080/clients', {
            fullName: "tdd",
            email: "tdd",
            cpf: 12345,
            companyId: 5
        });
        expect(postClient.status).toBe(200);
    })

    it('should update the client created previously', async () => {
        const putClient = await axios.put('http://localhost:8080/clients', {
            fullName: "tdd",
            email: "tdd",
            cpf: 12345,
            companyId: 5
        });
        expect(putClient.status).toBe(200);
    });

    it('should search for the client created previously', async () => {
        const client = await axios.get('http://localhost:8080/clients/12345');
        expect(client.status).toBe(200);
    })

    it('should delete the client created previosly', async () => {

        const deleteClient = await axios.delete('http://localhost:8080/clients/12345');
        expect(deleteClient.status).toBe(200);

    })


})