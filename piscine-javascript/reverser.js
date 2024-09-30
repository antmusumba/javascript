function reverse(input) {
    // Check if input is an array or a string
    if (typeof input === 'string' || Array.isArray(input)) {
      // Initialize an empty array for the result
      let result = [];
  
      // Loop through the input from the end to the beginning
      for (let i = input.length - 1; i >= 0; i--) {
        result.push(input[i]);
      }
  
      // If the input is a string, join the result array into a string
      return typeof input === 'string' ? result.join('') : result;
    } else {
      throw new TypeError('Input must be an array or a string');
    }
  }
