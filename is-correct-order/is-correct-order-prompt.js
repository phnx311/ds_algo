// The take - out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine -in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order(from either register) as it was finished by the kitchen. (servedOrders)
// Given all three arrays, write a function to check that my service is first - come, first - served.All food should come out in the same order customers requested it.

//   We'll represent each customer order as a unique integer.

// As an example,

//   Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first - come, first - served, since order 3 was requested before order 5 but order 5 was served first.

//   But,

//   Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 3, 5, 4, 6]
// would be first - come, first - served.

function isCorrectOrder(takeOut, dineIn, served) {

}