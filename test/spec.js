const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('dummy test', () => {
  before(() => {
    syncAndSeed()
  })

  describe('adds 1 + 2', () => {
    it('should result in 3', () => {
      expect(1 + 2).to.equal(3);
    });
  });
  describe('GET /', () => {
    it('show header about the api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme Movie API');
    });
  });
});
