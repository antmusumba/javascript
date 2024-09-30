import { readdir } from 'fs/promises';
import { resolve } from 'path';

async function listGuestsInDirectory() {
    const args = process.argv.slice(2);
    const directory = args.length > 0 ? args[0] : '.';

    try {
        const dirPath = resolve(directory);

        // Read the directory and get the list of files (guests)
        const entries = await readdir(dirPath);

        // Process the guest names, assuming they are stored as 'Firstname_Lastname'
        const sortedGuests = entries
            .map(file => {
                // Remove the file extension (assuming guests are named like "Firstname_Lastname.json")
                const nameWithoutExtension = file.split('.').slice(0, -1).join('.');
                
                // Split the name into first and last name based on underscores
                const [firstName, lastName] = nameWithoutExtension.split('_');
                
                return { firstName, lastName }; // Return an object for sorting
            })
            .sort((a, b) => a.lastName.localeCompare(b.lastName)); // Sort alphabetically by last name

        // Print the guests in the desired format
        sortedGuests.forEach((guest, index) => {
            console.log(`${index + 1}. ${guest.lastName} ${guest.firstName}`);
        });
    } catch (error) {
        console.error(`Error reading directory: ${error.message}`);
    }
}

// Call the function to list the guests
listGuestsInDirectory();
