import { TestMe } from ".";

const testObj = new TestMe(1, 2);

test("adds 1 + 2 to equal 3", () => {
  expect(testObj.sum()).toBe(3);
});
