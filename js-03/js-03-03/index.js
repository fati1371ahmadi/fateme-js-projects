const number1 = +prompt("Enter number1");
const number2 = +prompt("Enter number2");
const number3 = +prompt("Enter number3");
const number4 = +prompt("Enter number4");
const number5 = +prompt("Enter number5");

const fivenumbers = number1 + number2 + number3 + number4 + number5


function sum(){
    if (!isNaN(fivenumbers) && fivenumbers /5 >=12) {
        return(fivenumbers/5)
    }else {
        return("This average not access")
    }
}

console.log(sum())