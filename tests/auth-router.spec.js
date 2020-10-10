const server = require('../api/server.js');

const request = require('supertest');

describe('server.js', () => {
    test('that the testing environment is set up', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
})