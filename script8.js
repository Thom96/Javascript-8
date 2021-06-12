//FUNCTION DECLARATIONS
function add(number1, number2) {
    const sum1 = number1 * number1;
    const sum2 = number2 * number2;
    const NewTotal = sum1 + sum2;
    const Square = NewTotal * NewTotal;
    return Square;
}

console.log(add(10,5));

//FUNCTION EXPRESSIONS
const counter = function (number1, number2) {
    const count1 = number1 * number1;
    const count2 = number2 * number2;
    const Total = count1 + count2;
    const Multiply = Total * Total;
    return Multiply;
};

console.log(counter(45, 8));

//ARROW EXPRESSION
const value = (number1, number2) => {
    const add1 = number1 * number1;
    const add2 = number2 * number2;
    const Subtotal = add1 + add2;
    const NewTotal = Subtotal * Subtotal;
    return NewTotal;
};

console.log(value(444, 9844));