const leftNumber = +prompt("leftNumber?");
const operator = prompt("operator?");
const rightNumber = +prompt("rightNumber?");


if (isNaN(leftNumber) || isNaN(rightNumber)) {
    console.log("leftNumber or rightNumber ERROR!")
}

if (operator === "+") {
    console.log(leftNumber + rightNumber)
}

if (operator === "-") {
    console.log(leftNumber - rightNumber)
}

if (operator === "/") {
    console.log(leftNumber / rightNumber)
}

const left = true;
const right = true;

console.log(left && right)