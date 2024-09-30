function id(value) {
    return value;
  }
function getLength(input) {
    if (Array.isArray(input) || typeof input === 'string') {
      return input.length;
    }
    throw new TypeError('The input must be an array or a string.');
}