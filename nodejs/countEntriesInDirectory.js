// countEntriesInDirectory.js

const { readdir } = require('fs').promises;
const { resolve } = require('path');

async function countEntriesInDirectory() {
    // Get the directory path from the command line arguments or use the current directory
    const args = process.argv.slice(2);
    const directory = args.length > 0 ? args[0] : '.';

    try {
        // Resolve the path to an absolute path
        const dirPath = resolve(directory);

        // Read the directory to get the list of entries
        const entries = await readdir(dirPath);

        // Output only the number of entries (for test consistency)
        console.log(entries.length);
    } catch (error) {
        // Handle any errors, e.g., if the directory doesn't exist or can't be read
        console.error(`Error reading directory: ${error.message}`);
    }
}

// Call the function to count the entries
countEntriesInDirectory();
