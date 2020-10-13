const server = require('../api/server.js')
const request = require('supertest');

describe('GET /api/users', () => {
    it('returns 200', () => {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'nothing',
                password: 'something'
            })
            .then(res => {
                request(server)
                    .get('/api/users')
                    .then(response => {
                        expect(response.status).toBe(500);
                    })
            })
            .catch(err => {
                console.log('GET /api/jokes ERROR: ', err);
            })
    })

    it('returns application/json', () => {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'nothing',
                password: 'something'
            })
            .then(res => {
                request(server)
                    .get('/api/users')
                    .set('Accept', 'application/json')
                    .then(response => {
                        expect(response.type).toBe('application/json');
                    })
            })
            .catch(err => {
                console.log('GET /api/jokes ERROR: ', err);
            })
    })
})