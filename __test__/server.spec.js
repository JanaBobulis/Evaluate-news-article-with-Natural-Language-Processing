const app = require ('../src/server/index')
const supertest = require('supertest');
const request = supertest(app); //provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.

describe('Testing post endpoint', () => {
    it('testing /test endpoint', async (done) => {
        return request.get('/').then(data => {
            expect(data).toBeDefined();
            done();
        })
        .catch(err => {
            console.log(error)
            done();
        })
    });
})

afterAll((done) => {
    if (app) {
        app.close(done);
    }
})
