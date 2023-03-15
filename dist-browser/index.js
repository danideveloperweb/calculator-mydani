var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.sum = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error('cannot be divided by zero');
        }
        return a / b;
    };
    return Calculator;
}());
export default Calculator;
