// When relying on witnesses to remember a license plate, there are some characters that are often easily confused. 
// We want to make sure that we don't allow two people to have a license plate that is visually similar. For example, BOX and B0X.

// Your Challenge
// Write a function that returns true if the two provided license plates strings are visually similar. 
// For this test, we will only need to consider the 26 English uppercase characters A to Z and the digits 0 to 9.

// We won't worry about length (though your inputs will never be longer than 10 characters) 
// and we'll ignore spaces in the comparison, so "A A A" would be considered the same as "A AA"

// These characters will be considered visually equivalent

// 0, O, and Q
// 1, I, and T
// 2 and Z
// 5 and S
// 8 and B

// Examples
// Input		Output
// "ABC"	"DEF"	false
// "AAA"	"A A A"	true
// "BOX"	"B0X"	true
// "BIZ"	"812"	true

// 3 letter plates
// for i in length of plate:
//    for group in equivalents:
//        if group includes plate1[i] AND group includes plate2[i]
//              return true






// *************************** SOLUTION

const equivalents = [["0", "O", "Q"], ["1", "I", "T"], ["2", "Z"], 
                      ["5", "S"], ["8", "B"]]

similarLicensePlates = (plate1, plate2) => {
  
  const sanitisedPlate1 = sanitiseAndSplit(plate1)
  const sanitisedPlate2 = sanitiseAndSplit(plate2)
    
  return sanitisedPlate1.every((letter, index) => {
    const otherLetter = sanitisedPlate2[index]
    return lettersAreVisuallySimilar(letter, otherLetter)
  })
}

const sanitiseAndSplit = (plate) => plate.split("").filter((char) => char !== ' ')

const lettersAreVisuallySimilar = (letter1, letter2) => {

  if (letter1 === letter2) return true
  
  for (group of equivalents) {
    if (group.includes(letter1) && group.includes(letter2)) {
      return true
    }
  }
  return false
}
