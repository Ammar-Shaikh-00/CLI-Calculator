import { question } from "readline-sync";

type operator = '+'|'-'|'*'|'/'|'%';

 function main(): void
 {
   const firststr:string = question("Enter first number:\n")
   const operator:string = question("Enter operator:\n")
   const secondstr:string = question("Enter second number:\n")

    const validInput:boolean=isNumber(firststr) && isoperator(operator) && isNumber(secondstr);
    
    if(validInput)
    { 
        const firstNum : number = parseInt(firststr)
        const secondNum : number = parseInt(secondstr)
        const result = calculate(firstNum,operator as operator,secondNum)
        console.log("Output:\n",result)
    }
    else
    {
        console.log("\n Invalid Input \n")
        main()
    }
 }

 function calculate(firstNum:number,operator:operator,secondNum:number) 
 {
    switch (operator)
    {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
        case "%":
            return firstNum % secondNum;
    }
 }     

 function isoperator(operator:string):boolean
 {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':    
        return true;
        default:
            return false;
    }
 }

 function isNumber(str:string):boolean
 {
    const maybeNum = parseInt(str)
    const isNumber: boolean = !isNaN(maybeNum)
    return isNumber;
 }

 main();