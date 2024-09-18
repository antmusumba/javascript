// savingToAFile.js
const { writeFile } = require('fs').promises;
const { join } = require('path');
const { Command } = require('commander');
const program = new Command();

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

// Define command-line interface
program
    .name('verydisco-forever')
    .description('Transforms sentences into "very disco" style and saves to a file.')
    .argument('<sentence>', 'Sentence to transform')
    .option('-o, --output <file>', 'Output file', 'verydisco-forever.txt')
    .action(async (sentence, options) => {
        const transformed = veryDiscoSentence(sentence);
        const outputFilePath = join(process.cwd(), options.output);
        try {
            await writeFile(outputFilePath, transformed, 'utf-8');
            console.log(`Disco result saved to ${outputFilePath}`);
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    });

program.parse();
