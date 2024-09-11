/**
 * The start of the application.
 *
 * @author Sofie Swagemakers Herou
 */

import readline from 'readline'
// import Font from 'ascii-art-font'
// const Font = require('ascii-art-font')

// Read the input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * Function to convert text to ascii code.
 *
 * @param {string} text - The text to convert to ascii code.
 * @returns {Array} - The ascii code of the text.
 */
const textToAscii = (text) => {
  return text.split('').map(char => char.charCodeAt(0))
}

/**
 * Function to convert ascii code to text.
 *
 * @param {Array} asciiArray - The ascii code to convert to text.
 * @returns {string} - The text of the ascii code.
 */
const asciiToText = (asciiArray) => {
  return asciiArray.map(code => String.fromCharCode(code)).join('')
}

rl.question('What is your name? ', name => {
  console.log(`Hello ${name}!`)
  const asciiName = textToAscii(name)
  const nameAscii = asciiToText(asciiName)
  console.log('Convert text to ascii: ' + asciiName)
  console.log('Convert ascii to text: ' + nameAscii)

  rl.close()
})
