/**
 * The module for generating a poem from the API.
 * API: https://github.com/thundercomb/poetrydb/blob/master/README.md
 *
 * @author Sofie Swagemakers Herou
 */

/**
 * The function to generate a poem from the API.
 *
 * @param {string} name - The name of the person for whom the poem is generated.
 * @returns {void} - The json response with the poem.
 */
export function generateAPIPoem (name) {
  const url = 'https://poetrydb.org/random'

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      const poem = data[0] // Get the first poem from the response
      const poemContent = poem.lines.join('\n') // Convert array of lines to a single string
      document.getElementById('poemOutput').textContent = `Poem for ${name}:\n \n${poemContent}`
    })
    .catch(error => {
      console.error('Error fetching poem:', error)
      document.getElementById('poemOutput').textContent = 'Failed to load poem. Please try again later.'
    })
}
