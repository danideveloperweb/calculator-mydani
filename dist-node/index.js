"use strict";
exports.__esModule = true;
exports.divide = exports.multiply = exports.subtract = exports.sum = void 0;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function divide(a, b) {
    if (b === 0) {
        throw new Error('cannot be divided by zero');
    }
    return a / b;
}
exports.divide = divide;
