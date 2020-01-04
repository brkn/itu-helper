import {removeWhiteSpace} from "./string-utils";

describe("removeWhiteSpace util function", () => {
  test("should return empty string when given empty string", () => {
    const result = removeWhiteSpace("");

    expect(result).toBe("");
  });

  test("should return abc123 when given ' a b c 1 2 3'", () => {
    const result = removeWhiteSpace(" a b c 1 2 3 ");

    expect(result).toBe("abc123");
  });

  test("should return abc when given 'abc'", () => {
    const result = removeWhiteSpace("abc");

    expect(result).toBe("abc");
  });
});
