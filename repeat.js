// Create a function named repeat that takes a string and a number as arguments, and returns the string repeated as many times as the number describes. It should function like String.repeat(), but of course you must make your own.
function repeat(str,num) {
    let result = '';
    for (let i = 0; i < num ; i++) {
        result += str;
    }
    return result;
}
let mor = "hello ";
let result = mor.repeat(5);
console.log(result);