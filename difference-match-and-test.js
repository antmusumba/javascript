const str = "I have a cat and another Cat.";
const regex = /cat/;
console.log(regex.test(str));
console.log(str.match(regex));
const regexGlobal = /cat/gi;
console.log(str.match(regexGlobal));