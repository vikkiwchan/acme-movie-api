const { expect } = require('chai');

describe('dummy test', () => {
  describe('adds 1 + 2', () => {
    it('should result in 3', () => {
      expect(1 + 2).to.equal(3);
    });
  });
});
