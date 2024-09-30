// remove the first 2 characters of a string
function cutFirst(str) {
    return str.slice(2);
  }
  
  // remove the last 2 characters of a string
  function cutLast(str) {
    return str.slice(0, -2);
  }
  
  // remove the first 2 and the last 2 characters of a string
  function cutFirstLast(str) {
    return str.slice(2, -2);
  }
  
  // keep only the first 2 characters of a string
  function keepFirst(str) {
    return str.slice(0, 2);
  }
  
  // keep only the last 2 characters of a string
  function keepLast(str) {
    return str.slice(-2);
  }
  
  // keep the first 2 and the last 2 characters of a string
  function keepFirstLast(str) {
    if (str.length <= 4) {
      return str; // If the string is too short, return it as is
    }
    return str.slice(0, 2) + str.slice(-2);
  }