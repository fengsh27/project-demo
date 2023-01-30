
describe("first test", () => {
  it("should print Hello Jest", () => {
    console.log("Hello Jest!");
    expect(true).toBeTruthy();
  });
  it("should be false", () => {
    expect(false).toBeFalsy();
  });
});
