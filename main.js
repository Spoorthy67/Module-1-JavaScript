// Step 7: DOM Manipulation

// Select the container
const eventsContainer = document.querySelector("#eventsContainer");

// Function to render events
function renderEvents() {
  eventsContainer.innerHTML = ""; // Clear previous content

  events.forEach(event => {
    // Create card
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px 0";

    // Event title
    const title = document.createElement("h3");
    title.textContent = event.name;
    card.appendChild(title);

    // Date
    const date = document.createElement("p");
    date.textContent = `Date: ${event.date.toDateString()}`;
    card.appendChild(date);

    // Category
    const category = document.createElement("p");
    category.textContent = `Category: ${event.category}`;
    card.appendChild(category);

    // Seats
    const seats = document.createElement("p");
    seats.textContent = `Seats Available: ${event.seats}`;
    card.appendChild(seats);

    // Register Button
    const btn = document.createElement("button");
    btn.textContent = "Register";
    btn.disabled = event.seats <= 0;
    btn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents(); // Refresh the UI
      }
    };
    card.appendChild(btn);

    // Append card to container
    eventsContainer.appendChild(card);
  });
}

// Initial render
renderEvents();
