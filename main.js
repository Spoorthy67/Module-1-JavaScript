// Step 10: Modern JavaScript Features

// 1. Default parameters in a function
function displayGreeting(user = "Guest") {
  console.log(`👋 Hello, ${user}! Welcome to the portal.`);
}
displayGreeting(); // Hello, Guest!
displayGreeting("Ananya"); // Hello, Ananya!

// 2. Destructuring event details
events.forEach(({ name, date, category }) => {
  console.log(`🗓️ ${name} | ${date.toDateString()} | ${category}`);
});

// 3. Using spread operator to clone before filtering
const clonedEventList = [...events]; // Non-destructive
const upcomingMusicEvents = clonedEventList.filter(
  ({ category, date }) =>
    category === "Music" && date > new Date()
);
console.log("🎵 Upcoming Music Events:");
upcomingMusicEvents.forEach(({ name }) => console.log(`- ${name}`));
