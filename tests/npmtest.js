const expect = require('chai').expect;
const npmtest = require('../index');

describe("Test", () => {
    it("should be true", () => {
        expect(true).to.be.true;
    });
    it("should be false", () => {
        expect(false).to.be.false;
    });
    it("should be 'Test'", () => {
        expect(npmtest()).to.equal("Test");
    })
});