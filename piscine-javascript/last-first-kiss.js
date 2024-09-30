
  function first(input) {
    if (Array.isArray(input) || typeof input === 'string') {
      return input[0];
    }
    throw new TypeError('Input must be an array or a string.');
  }
  function last(input) {
    if (Array.isArray(input) || typeof input === 'string') {
      return input[input.length - 1];
    }
    throw new TypeError('Input must be an array or a string.');
  }
  function kiss(input) {
    if (Array.isArray(input) || typeof input === 'string') {
      return [last(input), first(input)];
    }
    throw new TypeError('Input must be an array or a string.');
  }
 