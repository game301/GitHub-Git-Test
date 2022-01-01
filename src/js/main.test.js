/**
 * @jest-environment jsdom
 */

const logSomething = require("./main");

test("Logs something:", (something) => {
    expect(logSomething("Hello teszt!")).toBe(console.log("Hello teszt!"));
});
