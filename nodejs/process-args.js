const { argv } = process;
argv.slice(2).forEach((val, index) => {
    console.log(`${index + 2}:${val}`);
});
console.log('Hello, Node.js!');
console.log(process.argv)