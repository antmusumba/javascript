function flat(array, depth = 1) {
    function flatten(arr, depth) {
      let result = [];
  
      for (let item of arr) {
        if (Array.isArray(item) && depth > 0) {
          result.push(...flatten(item, depth - 1));
        } else {
             result.push(item);
        }
      }
  
      return result;
    }
  
    return flatten(array, depth);
  }