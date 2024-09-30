// verydisco-reverso.mjs

import { readFile } from 'fs/promises';

// Function to reverse the very disco transformation for a single word
function reverseVeryDiscoWord(word) {
    const mid = Math.ceil(word.length / 2);
    const firstHalf = word.slice(-mid);
    const secondHalf = word.slice(0, -mid);
    return firstHalf + secondHalf;
}

// Function to reverse the transformation for a sentence
function reverseVeryDiscoSentence(sentence) {
    return sentence
        .split(' ')  // Split sentence into words
        .map(reverseVeryDiscoWord)  // Apply the reverse transformation to each word
        .join(' ');  // Join words back into a sentence
}

// Main function to read file and decipher its content
async function veryDiscoReverso() {
    const args = process.argv.slice(2);  // Get the command line arguments
    if (args.length === 0) {
        console.error('Please provide a file name.');
        process.exit(1);
    }

    const fileName = args[0];

    try {
        // Read the file content
        const fileContent = await readFile(fileName, 'utf-8');

        // Reverse the very disco mode on the file content
        const result = reverseVeryDiscoSentence(fileContent.trim());

        // Print the deciphered result in the console
        console.log(result);
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
}

// Call the main function
veryDiscoReverso();
