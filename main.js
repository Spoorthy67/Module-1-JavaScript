// Step 6: Arrays and Methods

// 1. Add new events using .push()
const extraEvents = [
  new Event("Music Fest", "2025-06-18", 40, "Music"),
  new Event("Baking Workshop", "2025-06-12", 20, "Cooking"),
  new Event("Live Jazz", "2025-06-22", 25, "Music")
];

events.push(...extraEvents);
console.log("🎉 Extra events added.");

// 2. Filter only music events
const musicEvents = events.filter(event => event.category === "Music");
console.log("🎶 Music Events:");
musicEvents.forEach(e => console.log(`- ${e.name}`));

// 3. Format event names using .map()
const formattedEventTitles = events.map(event => {
  return `Event: ${event.name} | Type: ${event.category}`;
});

console.log("📝 Formatted Event List:");
formattedEventTitles.forEach(title => console.log(title));
