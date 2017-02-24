// const expect = require('chai').expect;
// const npmtest = require('../index');

import * as chai from "chai";
import { npmtest } from "../index";

const expect = chai.expect;

describe("Test", () => {
    it("should be true", () => {
        expect(true).to.equal(true);
    });
    it("should be false", () => {
        expect(false).to.equal(false);
    });
    it("should be 'Test'", () => {
        expect(npmtest()).to.equal("Test");
    });
});