function sum(firstNumber = 0, secondNumber = 0, o) {
    if(!isNaN(firstNumber + secondNumber)) {
            switch(o) {
                case '+':
                    return(firstNumber + secondNumber);
                case '-':
                    return(firstNumber - secondNumber);
                case '*':
                    return(firstNumber * secondNumber);
                case '/':
                    return(firstNumber / secondNumber);
                default :
                    return("operator is Wrong!")        
            }
    }
        return "something wrong"
}

const firstNumber = +prompt("Enter FirstNumber");
const secondNumber = +prompt("Enter secondNumber");
const operator = prompt("Enter Operator");

console.log(sum(firstNumber, secondNumber,operator));