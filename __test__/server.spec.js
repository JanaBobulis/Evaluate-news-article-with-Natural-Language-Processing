import { app } from '../src/server/route'
const supertest = require('supertest');
const request = supertest(app); //provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.

describe('Testing post endpoint', () => {
    it('testing /test endpoint', async done => {
        const response = await request.get('/');
        expect(response.body).toBeDefined();
        done();
    });
})
