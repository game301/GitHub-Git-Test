/**
 * @jest-environment jsdom
 */

const logSomething = require("./main");

test("Logs something...", () => {
    expect(logSomething("fuck you")).toBe("fuck you");
});
