import decodeParams from "../decodeParams";

describe("decodeParams", () => {
  it("should return an object with the params as key value pairs", () => {
    const testParams = "this=is&a=test";
    const result = decodeParams(testParams);
    expect(result).toMatchObject({
      this: "is",
      a: "test",
    });
  });
});
