// verydisco-forever.mjs

import { writeFile } from 'fs/promises';
import { join } from 'path';

// Function to process a single word and make it "very disco"
function veryDiscoWord(word) {
    const mid = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, mid);
    const secondHalf = word.slice(mid);
    return secondHalf + firstHalf;
}

// Function to process a sentence, transforming each word
function veryDiscoSentence(sentence) {
    return sentence
        .split(' ') // Split sentence into words
        .map(veryDiscoWord) // Apply the transformation to each word
        .join(' '); // Join words back into a sentence
}

// Main execution
const args = process.argv.slice(2); // Get command line arguments excluding the first two (node and script path)
if (args.length === 0) {
    console.error('Please provide an argument.');
    process.exit(1);
}

const input = args[0];
const result = veryDiscoSentence(input);

// Path for the output file (in the current working directory)
const outputFilePath = join(process.cwd(), 'verydisco-forever.txt');

// Write the result to the verydisco-forever.txt file
writeFile(outputFilePath, result, 'utf-8')
    .then(() => {
        console.log(`Disco result saved to ${outputFilePath}`);
    })
    .catch((error) => {
        console.error('Error writing to file:', error);
    });
