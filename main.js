console.log("Welcome to the Community Portal");

window.onload = function () {
  alert("The Community Portal page is fully loaded!");
};

// Step 2 logic (kept for context)
const today = new Date("2025-05-27"); // Assume this is today's date

// Step 3: Conditionals, Loops, and Error Handling

const events = [
  {
    name: "Community Clean-Up Drive",
    date: new Date("2025-06-10"),
    seats: 50
  },
  {
    name: "Local Art Fair",
    date: new Date("2025-05-15"),
    seats: 0
  },
  {
    name: "Charity Marathon",
    date: new Date("2025-07-01"),
    seats: 100
  }
];

// Show only valid events
console.log("Upcoming Events with Available Seats:");
events.forEach(event => {
  if (event.date >= today && event.seats > 0) {
    console.log(`✔️ ${event.name} on ${event.date.toDateString()} — Seats: ${event.seats}`);
  } else {
    console.log(`❌ Skipping "${event.name}" - Past or Full`);
  }
});

// Register a user for a given event
function registerUserForEvent(eventName) {
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found");

    if (event.date < today) {
      throw new Error("Cannot register for past event");
    }

    if (event.seats <= 0) {
      throw new Error("No seats available");
    }

    event.seats--;
    console.log(`🎉 Registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (error) {
    console.error(`❗ Registration error: ${error.message}`);
  }
}

// Simulate registration attempts
registerUserForEvent("Charity Marathon");
registerUserForEvent("Local Art Fair"); // Should throw error
registerUserForEvent("Nonexistent Event"); // Should throw error
