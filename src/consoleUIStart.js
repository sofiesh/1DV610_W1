// console.log('hej')

import readline from 'readline'
// import { addition } from "./addition"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function selectOperator (userInput) {
    console.log('Skriv räknesätt: ')
    let userInput = rl.input
    console.log('userInput: ' + userInput)
}

// function getUserInput (selectOperator, firstNumber, secondNumber) {
//     console.log('Välj räknesätt: ')
//     switch {
//         case (selectOperator = addition)
//         case (selectOperator = subtraction)
//         case (selectOperator = multiplication)
//         case (selectOperator = division)
//     }
//     console.log('Skriv ett tal: ')
//     console.log('Skriv ett andra tal: ')
// }

selectOperator()



// readline med fråga till användaren
// getUserInput (a, b) {

// }

// exekverar addition funktionen

