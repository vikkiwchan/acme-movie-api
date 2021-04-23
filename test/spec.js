const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('dummy test', () => {

  describe('adds 1 + 2', () => {
    it('should result in 3', () => {
      expect(1 + 2).to.equal(3);
    });
  });

  describe('GET /', () => {
    beforeEach(async function() {
      await syncAndSeed();
    })

    it('show header about the api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme Movie API');
    });

    it('show all movies on /api/movies route', async () => {
      const response = await app.get('/api/movies');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(4);
    });

    it('show all actors on /api/actors route', async () => {
      const response = await app.get('/api/actors');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(5);
    });
  });

});
