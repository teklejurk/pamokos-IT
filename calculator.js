let num1 = document.querySelector('#num1') 
let num2 = document.querySelector('#num2') 
let h1Element = document.querySelector('h1')

num1.addEventListener('input', enableButtons)
num2.addEventListener('input', enableButtons)

function enableButtons(){
    sumButton.removeAttribute('disabled')
    subtButton.removeAttribute('disabled')
    multipButton.removeAttribute('disabled')
    divsnButton.removeAttribute('disabled')
}

let sumButton = document.querySelector('#sum-button')
sumButton.addEventListener('click', () => {
    let answer = num1.valueAsNumber + num2.valueAsNumber
    // console.log(answer)
    // console.log(num1.valueAsNumber)
    // console.log(num2.valueAsNumber)
    // console.log('5 + 5 = 10')
    // console.log(`${num1.valueAsNumber} + ${num2.valueAsNumber} = ${answer}`)
    h1Element.textContent = `${num1.valueAsNumber} + ${num2.valueAsNumber} = ${answer}`
})

let subtButton = document.querySelector('#subtract-button')
subtButton.addEventListener('click', () => {
    let answer = num1.valueAsNumber - num2.valueAsNumber
    h1Element.textContent = `${num1.valueAsNumber} - ${num2.valueAsNumber} = ${answer}`
})

let multipButton = document.querySelector('#multip-button')
multipButton.addEventListener('click', () => {
    let answer = num1.valueAsNumber * num2.valueAsNumber
    h1Element.textContent = `${num1.valueAsNumber} * ${num2.valueAsNumber} = ${parseFloat(answer)}`
})

let divsnButton = document.querySelector('#divsn-button')
divsnButton.addEventListener('click', () => {
    let answer = num1.valueAsNumber / num2.valueAsNumber
    h1Element.textContent = `${num1.valueAsNumber} / ${num2.valueAsNumber} = ${answer.toFixed(3)}`
})




// let action = prompt('enter an action')

// if(action == '*') {
//     console.log(num1 * num2)
// } else if(action === '/') {
//     console.log(num1 / num2)
// } else if(action === '+') {
//     console.log(num1 + num2)
// } else if(action === '-') {
//     console.log(num1 - num2)
// } else {
//     console.log('not an action')
// }