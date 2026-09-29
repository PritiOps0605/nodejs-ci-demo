const { test } = require("node:test");
const assert = require("node:assert");

const { getMessage, getGreeting } = require("../src/index");

test("Application should return the welcome message", () => {
    assert.strictEqual(
        getMessage(),
        "Welcome to DevOps Training"
    );
});

test("Greeting function should return the correct greeting", () => {
    assert.strictEqual(
        getGreeting("Priti"),
        "Hello, Priti! Welcome to DevOps"
    );
});