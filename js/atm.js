// An ATM only has 100, 50 and 20 dollar bills (USD) available to be dispensed.

// Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM wants to use as few bills as possible
// determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).

// Here is the specification for the withdraw method you'll complete:

// withdraw(amount)
// Parameters
// amount: Number - Amount of money to withdraw. Assume that the amount is always divisible into 100, 50 and 20 bills.

// Return Value
// Array <Number> - An array of 3 integers representing the number of 100, 50 and 20 dollar bills needed to complete the withdraw (in that order).

// Constraints
// 40 ≤ amount ≤ 1000

// Examples
// amount	Return Value
// 250	    [2,1,0]
// 260	    [2,0,3]
// 370	    [3,1,1]

// step1: for total from last step, how many of X bill can we fit?
// step2: ALSO for total of last step, after taking those X bill, how much is left?
// put whatever is left in the pot and repeat

// const solution = Math.floor(250 / 100)
// const remainderFrom100 = 250 - (numberOf100s * 100)

// const numberOf50ss = (remainderFrom100 / 50).floor
// const remainderFrom100 = remainderFrom100 - (numberOf50s * 50)

// const numberOf20s = Math.floor(remainderFrom50 / 20)
// const remainderFrom50 = remainderFrom50 - (numberOf20s * 20)

// return [numberof100s, numberOf50s, numberOf20s]



// *************************** SOLUTION

const withdraw = amount => {
  
  let solution = [0, 0, 0]
  
// $100
  const numberOf100s = Math.floor(amount / 100)
  let remainderFrom100s = amount - (numberOf100s * 100)
  
  if (remainderFrom100s === 10 || remainderFrom100s === 30) {
      solution[0] = numberOf100s - 1
      remainderFrom100s += 100
  } else {
      solution[0] = numberOf100s
  }
    
// $50
  const numberOf50s = Math.floor(remainderFrom100s / 50)
  let remainderFrom50s = remainderFrom100s - (numberOf50s * 50)
  
  if (remainderFrom50s === 10 || remainderFrom50s === 30) {
      solution[1] = numberOf50s - 1
      remainderFrom50s += 50
  } else {
    solution[1] = numberOf50s
  }
      
// $20  
  const numberOf20s = Math.floor(remainderFrom50 / 20)
      
      solution[2] = numberOf20s
  
  return solution

}
