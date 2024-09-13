/**
 * The main.js module for the client.
 *
 * @author Sofie Swagemakers Herou
 */

import { helloWorld } from './helloWorld.js'
import { asciiName } from './asciiName.js'
import { generateAPIPoem } from './generateAPIPoem.js'

document.getElementById('greetingButton').addEventListener('click', () => {
  const name = document.getElementById('greetingInput').value // Get the value of the input field
  const helloName = helloWorld(name) // Call the helloWorld function from the helloWorld module
  document.getElementById('greetingOutput').textContent = helloName // Set the text content of the output element to the asciiName
})

document.getElementById('convertButton').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value // Get the value of the input field
  const nameToAscii = asciiName(name) // Call the asciiName function from the asciiName module
  document.getElementById('asciiOutput').textContent = nameToAscii // Set the text content of the output element to the asciiName
})

document.getElementById('generatePoemButton').addEventListener('click', () => {
  const name = document.getElementById('poemNameInput').value
  const poem = generateAPIPoem(name)
  document.getElementById('poemOutput').textContent = poem
})
