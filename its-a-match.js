

// Create 4 regular expression variables:

//     normal: matches with the expression 'hi'.

//     begin: matches with the expression 'hi', only when it is at the beginning.

//     end: matches with the expression 'hi', only when it is at the end.

//     beginEnd: matches with the expression 'hi', only when it is exactly hi.
const normal = /hi/;
const begin = /^hi/;
const end = /hi$/;
const beginEnd = /^hi$/;

// Test strings
let testStrings = [
    "hello hi there",
    "hi there",
    "say hi",
    "hi",
    "hello world"
];

testStrings.forEach((str) => {
    console.log(`Testing string: "${str}"`);
    
    // Test normal (anywhere)
    console.log(`Matches anywhere: ${normal.test(str)}`);
    
    // Test begin (only at the beginning)
    console.log(`Matches at beginning: ${begin.test(str)}`);
    
    // Test end (only at the end)
    console.log(`Matches at end: ${end.test(str)}`);
    
    // Test beginEnd (exactly 'hi')
    console.log(`Matches exactly 'hi': ${beginEnd.test(str)}`);
    
    console.log('-------------------');
});