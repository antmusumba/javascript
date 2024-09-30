// Function to multiply two numbers without using *
function multiply(a, b) {
    let result = 0;
    const positiveB = Math.abs(b);
    for (let i = 0; i < positiveB; i++) {
      result += a;
    }
    // Adjust for negative multiplier
    return b < 0 ? -result : result;
  }
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    const negativeResult = (a < 0) !== (b < 0); // Check if result should be negative
    a = Math.abs(a);
    b = Math.abs(b);
    let result = 0;
    while (a >= b) {
      a -= b;
      result++;
    }
    return negativeResult ? -result : result;
  }
  function modulo(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    const negativeA = a < 0;
    a = Math.abs(a);
    b = Math.abs(b);
    while (a >= b) {
      a -= b;
    }
    // Adjust result for negative initial value of a
    return negativeA ? -a : a;
  }
  
  