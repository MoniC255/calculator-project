const numberedKeys = document.querySelectorAll(".numbered-keys");
const operandKeys = document.querySelectorAll(".operand-keys");
const piKey = document.getElementById("pi-key");
const deleteKey = document.getElementById("delete-key");
const clearKey = document.getElementById("clear-screenKey");
const allClearKey = document.getElementById("all-clearKey");
const decimalKey = document.getElementById("decimal-key");
const equalsKey = document.getElementById("equals-key");
const buttons = document.querySelectorAll("button");
const displayScreen = document.getElementById("outputNumber");
const firstNumberStorage = document.querySelector('#firstNumberStorage');

let firstNumber,secondNumber,operator;



const onKeyPress = (event) => {
  let key = event.target.innerText;
  displayScreen.innerHTML += `${key}`


}

for (let index = 0; index < numberedKeys.length; index++) {
  numberedKeys[index].addEventListener("click", (onKeyPress));
}


const onOperandKeyPress = (event) => {
  firstNumber = displayScreen.innerHTML
  
 
  operator = event.target.value;
  

  firstNumberStorage.innerHTML += parseFloat(firstNumber);

  displayScreen.innerHTML = ''








}


for (let index = 0; index < operandKeys.length; index++) {
  operandKeys[index].addEventListener("click", (onOperandKeyPress));
}




const clearButton = () => {
  displayScreen.innerHTML = ''
  firstNumberStorage.innerHTML = ''


}

clearKey.addEventListener('click', (clearButton))



const message = () => {

allClearKey.classList.toggle('active',)


allClearKey.classList.contains('active'),
displayScreen.innerHTML = 'ON';




}


allClearKey.addEventListener('click',(message) )





const deleteButton = (event) => {
 
  displayScreen.innerHTML = displayScreen.innerHTML.slice(0,-1)
 
}

deleteKey.addEventListener('click', (deleteButton))




const decimalNumber = () => {

  displayScreen.innerHTML += decimalKey.innerHTML

 


}


decimalKey.addEventListener('click', (decimalNumber))



const calculatePi = () => {

  displayScreen.innerHTML += piKey.innerHTML


}

piKey.addEventListener('click',(calculatePi))




const calculate = () => {
secondNumber = displayScreen.innerHTML;


let firstNumberFloat = parseFloat(firstNumber);
let secondNumberFloat = parseFloat(secondNumber);

let result;
if (operator === "multiply") {
  result = firstNumberFloat * secondNumberFloat
  firstNumberStorage.innerHTML = ''
  displayScreen.innerHTML = result.toString();

} else if (operator === "plus") {
  result = firstNumberFloat + secondNumberFloat
  firstNumberStorage.innerHTML = ''
  displayScreen.innerHTML = result.toString();
  

} else if (operator === "minus") {
  result = firstNumberFloat - secondNumberFloat
  firstNumberStorage.innerHTML = ''
  displayScreen.innerHTML = result.toString();
  

} else if (operator === "divide") {
   result = firstNumberFloat / secondNumberFloat
   firstNumberStorage.innerHTML = ''
   displayScreen.innerHTML = result.toString()
    
} else
   return;

}


equalsKey.addEventListener('click', (calculate))















 


















