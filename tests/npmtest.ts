// const expect = require('chai').expect;
// const npmtest = require('../index');

import * as chai from "chai";
import { npmtest } from "../index";
import info from "../index";

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
    it("should read the info object", () => {
        expect(info.name).to.equal("NPM Test");
        expect(info.version).to.equal("0.0.1");
    });
});