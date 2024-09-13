/**
 * The asciiName.js module for the client.
 *
 * @author Sofie Swagemakers Herou
 */

/**
 * Function to convert a name to ascii code.
 *
 * @param {string} name - The name to convert to ascii code.
 * @returns {string} - The ascii code of the name.
 */
export function asciiName (name) {
  return name.split('').map(char => char.charCodeAt(0)).join(' ')
}
