function slice(input, start, end) {
    // Handle default values for start and end
    const length = input.length;
    const startIndex = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    const endIndex = end === undefined ? length : (end < 0 ? Math.max(length + end, 0) : Math.min(end, length));
  
    // Initialize result based on input type
    let result = Array.isArray(input) ? [] : '';
  
    // Build the result by iterating over the input
    for (let i = startIndex; i < endIndex; i++) {
      if (Array.isArray(input)) {
        result.push(input[i]);
      } else {
        result += input[i];
      }
    }
  
    return result;
  }
  
