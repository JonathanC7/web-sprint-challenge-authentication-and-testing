const server = require('../api/server.js');

const request = require('supertest');
const { intersect } = require('../database/dbConfig.js');

describe('server.js', () => {
    test('that the testing environment is set up', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    let res = {};

    
    describe('GET /', () => {
        beforeAll(async () => {
            res = await request(server).get('/');
        })
        it('returns 201 created', async () => {
            expect(res.status).toBe(200);
        })
    })
})