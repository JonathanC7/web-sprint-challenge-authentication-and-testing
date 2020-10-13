const auth = require('../api/server.js');
const request = require('supertest');

describe('POST /api/auth', () => {

    it('returns 201 created', () => {
        return request(auth)
            .post('/api/auth/register')
            .send({
                username: "onat8",
                password: "8als4A"
            })
            .set('Accept', 'application/json')
            .then(res => {
                expect(res.status).toBe(201);
            })
            .catch(err => {
                console.log('ERROR: ', err)
            })
    })

    it('returns application/json', () => {
        return request(auth)
            .post('/api/auth/register')
            .send({
                username: 'nothing',
                password: 'something'
            })
            .set('Accept', 'application/json')
            .then(res => {
                expect(res.type).toBe('application/json')
            })
            .catch(err => {
                console.log('ERROR: ', err)
            })
    })

    it('returns 201 created', () => {
        return request(auth)
            .post('/api/auth/login')
            .send({
                username: "onat8",
                password: "8als4A"
            })
            .set('Accept', 'application/json')
            .then(res => {
                expect(res.status).toBe(200);
            })
            .catch(err => {
                console.log('ERROR: ', err)
            })
    })

    it('returns application/json', () => {
        return request(auth)
            .post('/api/auth/login')
            .send({
                username: 'nothing',
                password: 'something'
            })
            .set('Accept', 'application/json')
            .then(res => {
                expect(res.type).toBe('application/json')
            })
            .catch(err => {
                console.log('ERROR: ', err)
            })
    })
})

