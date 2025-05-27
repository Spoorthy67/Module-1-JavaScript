// Step 5: Objects and Prototypes

// Define Event class
class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = new Date(date);
    this.seats = seats;
    this.category = category;
  }

  // Add method to prototype to check availability
  checkAvailability() {
    const today = new Date("2025-05-27");
    return this.date >= today && this.seats > 0;
  }
}

// Create instances of Event
const event1 = new Event("Community Yoga", "2025-06-05", 15, "Health");
const event2 = new Event("Art Workshop", "2025-05-20", 0, "Art");

// Add to events array
events.push(event1, event2);

// Display details using Object.entries()
function displayEventDetails(eventObj) {
  console.log(`📋 Details for "${eventObj.name}":`);
  for (const [key, value] of Object.entries(eventObj)) {
    console.log(`${key}: ${value in
