// Log welcome message to console
console.log("Welcome to the Community Portal");

// Show alert when the page is fully loaded
window.onload = function () {
  alert("The Community Portal page is fully loaded!");
};

// Step 2: Syntax, Data Types, and Operators

// Event details
const eventName = "Community Clean-Up Drive";
const eventDate = "2025-06-10";
let availableSeats = 50;

// Display event info using template literals
const eventInfo = `Event: ${eventName} | Date: ${eventDate} | Seats Available: ${availableSeats}`;
console.log(eventInfo);

// Simulate a user registration
function registerUser() {
  if (availableSeats > 0) {
    availableSeats--; // Decrease seat count
    console.log(`User registered! Seats left: ${availableSeats}`);
  } else {
    console.log("Sorry, no more seats available.");
  }
}

// Simulate a few registrations
registerUser();
registerUser();
