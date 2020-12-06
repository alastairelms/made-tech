getMiddle = (str) => {
 
    let newStrStart
    let newStrLength
    
    // odd
      if (str.length % 2 === 1) {
      newStrStart = str.length / 2
      newStrLength = 1
    // even
    } else {
      newStrStart = str.length / 2 - 1
      newStrLength = 2
    }
    
    return str.substring(newStrStart, newStrStart + newStrLength)
     
  }  