// Step 4: Functions, Scope, Closures, Higher-Order Functions

// 1. Function to add a new event
function addEvent(name, date, seats, category) {
  const newEvent = {
    name,
    date: new Date(date),
    seats,
    category
  };
  events.push(newEvent);
  console.log(`➕ Event "${name}" added.`);
}

// 2. Function to register user with error handling
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (!event) {
    console.error("❗ Event not found");
    return;
  }
  if (event.date < today) {
    console.warn("⏰ Can't register: Event already passed.");
    return;
  }
  if (event.seats <= 0) {
    console.warn("🚫 No seats available.");
    return;
  }
  event.seats--;
  console.log(`✅ Registered for "${event.name}". Seats left: ${event.seats}`);
}

// 3. Function to filter by category
function filterEventsByCategory(category) {
  return events.filter(event => event.category === category);
}

// 4. Closure to track total registrations by category
function createCategoryTracker() {
  const categoryCount = {};
  return function register(category) {
    if (categoryCount[category]) {
      categoryCount[category]++;
    } else {
      categoryCount[category] = 1;
    }
    console.log(`📊 Total registrations in "${category}": ${categoryCount[category]}`);
  };
}

const trackRegistrationByCategory = createCategoryTracker();

// Example usage
addEvent("Tech Meetup", "2025-06-20", 30, "Technology");
addEvent("Music Night", "2025-06-15", 20, "Music");

registerUser("Tech Meetup");
trackRegistrationByCategory("Technology");

registerUser("Music Night");
trackRegistrationByCategory("Music");

// 5. Higher-order function with callback for custom filtering
function dynamicFilter(callback) {
  return events.filter(callback);
}

// Example: Filter events with more than 30 seats
const spaciousEvents = dynamicFilter(event => event.seats > 30);
console.log("🪑 Events with more than 30 seats:");
spaciousEvents.forEach(e => console.log(`- ${e.name} (${e.seats} seats)`));
