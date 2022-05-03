// Patterns
// Write a program that returns a string where every other character is a & followed by a blank space. Print out this string so that it forms a 10 x 10 grid which would look similar to this:
// ```
// &   &   &   &   &
//   &  &  &  &  &
// &   &   &   &   &
//   &  &  &  &  &
// &   &   &   &   &
//   &  &  &  &  &
// &   &   &   &   &
//   &  &  &  &  &
// &   &   &   &   &
//   &  &  &  &  &
// ```

const printPattern = () => {
  let char = '&'
  let array = []

  // when called it toggles the char between '&' and ' '
  function toggleChar() {
    char === '&' ? (char = ' ') : (char = '&')
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // at every iteration it pushes the current char and toggles it
      array.push(char)
      toggleChar()
    }
    // every ten characters it adds a carriage return character(\n) to the array
    // and toggles the character
    array.push('\n')
    toggleChar()
  }

  // it converts the array into a string and prints it
  console.log(array.join(''))
}

printPattern()

// Modified version that takes in a character, the width and the height
// of the rectangle.
// It uses default parameters in case arguments are not passed.
const printPatternExtra = (character = '&', width = 10, height = 10) => {
  let char = character
  let array = []

  // when called it toggles the char between '&' and ' '
  function toggleChar() {
    char === character ? (char = ' ') : (char = character)
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // at every iteration it pushes the current char and toggles it
      array.push(char)
      toggleChar()
    }
    // every number of character equal to the width
    // it adds a carriage return character(\n) to the array and toggles the character
    array.push('\n')
    toggleChar()
  }

  // it converts the array into a string and prints it
  console.log(array.join(''))
}

printPatternExtra('A', 20, 6)
printPatternExtra()
