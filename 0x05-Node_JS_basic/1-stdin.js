// Display a welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Get user input and remove extra spaces
  console.log(`Your name is: ${name}`); // Output the user's name

  // Close the input stream and exit
  process.stdin.end();
});

// Handle the closing of the input stream
process.stdin.on('end', () => {
  console.log("This important software is now closing");
});
