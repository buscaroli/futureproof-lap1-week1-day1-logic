// Create a ternary that correctly returns a pluralised string
// Create a program that takes two variables, “item” which is equal to the name of an item and “count” which is equal to the number of items I have. Create a ternary statement that returns a sentence as such ‘I have <count> <item>’’. However the word count and item should be replaced by the values in the variables and item should have a s on the end if there is more than one item.

// ternary(itemName, itemQuantity)

const ternary = (itemName, itemQuantity) => {
  return `I have ${itemQuantity} ${itemName}${itemQuantity > 1 ? 's' : ''}`
}

console.log(ternary('rock', 3))
console.log(ternary('boulder', 1))
