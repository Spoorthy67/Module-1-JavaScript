// Step 8: Event Handling

const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

let filteredCategory = "All";
let searchKeyword = "";

// Modify renderEvents to support filters
function renderEvents() {
  eventsContainer.innerHTML = "";

  let filteredEvents = events.filter(event => {
    const matchesCategory = filteredCategory === "All" || event.category === filteredCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px 0";

    const title = document.createElement("h3");
    title.textContent = event.name;
    card.appendChild(title);

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date.toDateString()}`;
    card.appendChild(date);

    const category = document.createElement("p");
    category.textContent = `Category: ${event.category}`;
    card.appendChild(category);

    const seats = document.createElement("p");
    seats.textContent = `Seats Available: ${event.seats}`;
    card.appendChild(seats);

    const btn = document.createElement("button");
    btn.textContent = "Register";
    btn.disabled = event.seats <= 0;
    btn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents(); // Refresh UI
      }
    };
    card.appendChild(btn);

    eventsContainer.appendChild(card);
  });
}

// Filter events when category changes
categoryFilter.onchange = (e) => {
  filteredCategory = e.target.value;
  renderEvents();
};

// Search when key is pressed in search input
searchInput.addEventListener("keydown", (e) => {
  searchKeyword = e.target.value;
  renderEvents();
});
