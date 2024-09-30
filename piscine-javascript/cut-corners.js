function modulo(a, b) {
  let neg = false
  if (a < 0) {
      neg = true
  }
  let val = Math.abs(a)
  let val2 = Math.abs(b)
  while (val > val2 || val === val2) {
      val -= val2;
  }
  return neg ? -val : val;
};

function round(num) {
  let neg = false
  if (num < 0) {
      neg = true
      num *= -1
  }
  let mod = modulo(num, 1)
  let number = num - mod

  if (mod > 0.5) {
      number += 1
  }
  if (neg) {
      number *= -1
  }
  return number;
};
function ceil(num) {
  let neg = false
  if (num < 0) {
      neg = true
      num *= -1
  }
  let mod = modulo(num, 1)
  let number = num - mod

  if (mod > 0) {
      number += 1
  }
  if (neg) {
      //number -= 1
      number = -number + 1
  }
  return number;

};

function floor(num) {
  let neg = false
  if (num < 0) {
      neg = true
      num *= -1
  }
  let mod = modulo(num, 1)
  let number = num - mod
  if (neg) {
      number = -number - 1
  };
  return number;
};

function trunc(num) {
  let count = 0
  if (num > 0xfffffffff) {
      num -= 0xfffffffff
      count += 0xfffffffff
  }
  let neg = false
  if (num < 0) {
      neg = true
      num = -num
  }
  let copy = num
  while(!(copy < 1 && copy > -1)) {
      copy -= 1
      count++
  }
  if (neg) {
      return -count
  }
  return count
}