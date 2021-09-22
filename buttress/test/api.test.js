import chai from "chai";
import { comparePassword } from "./comparePassword.js";

const expect = chai.expect;

const isNumValid = function (num) {
  if (num >= 70) {
    return false;
  } else if (num <= 10) {
    return false;
  } else {
    return true;
  }
};

describe("validator isValid()", () => {
  after(() => {});

  beforeEach(() => {});

  afterEach(() => {});
  //test a function for a specific case
  it("should return true for correct password", () => {
    expect(
      comparePassword(
        "B4c0//",
        "$2a$10$XhxOxZb5ia57x6RI.9n8SObGIEe/.P.iH8j8NuuWuAtMYZ5dVd97a"
      )
    ).to.be.true;
  });
  it("should return true for a number in between 10 and 70", () => {
    expect(isNumValid(39)).to.be.true;
  });

  it("should return false when the number is less than or equal to 10", () => {
    expect(isNumValid(10)).to.be.false;
  });

  it("should return false when the number is greater than or equal to 70", () => {
    expect(isNumValid(79)).to.be.false;
  });
});
