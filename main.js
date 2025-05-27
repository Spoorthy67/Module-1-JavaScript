// Step 9: Async JS, Promises, Async/Await

const loadingElement = document.querySelector("#loading");

// Mock fetch function (simulating an API call)
function fetchEventsMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        new Event("Tech Talk", "2025-07-01", 50, "Technology"),
        new Event("Music Night", "2025-07-10", 30, "Music"),
        new Event("Health Awareness Camp", "2025-07-15", 0, "Health")
      ];
      resolve(data);
      // reject("Failed to fetch events."); // Uncomment to test error case
    }, 2000); // Simulate 2-second delay
  });
}

// Fetch using .then() and .catch()
fetchEventsMock()
  .then(data => {
    events.push(...data);
    loadingElement.style.display = "none";
    renderEvents();
  })
  .catch(error => {
    loadingElement.textContent = `❌ Error: ${error}`;
  });

// Async/await version (alternative)
async function loadEventsAsync() {
  try {
    loadingElement.style.display = "block";
    const data = await fetchEventsMock();
    events.push(...data);
    renderEvents();
    loadingElement.style.display = "none";
  } catch (error) {
    loadingElement.textContent = `❌ Error: ${error}`;
  }
}

// You can call this instead of fetchEventsMock() to test async/await version
// loadEventsAsync();
