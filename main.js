// Step 11: Working with Forms

const registrationForm = document.querySelector("#registrationForm");
const userNameInput = registrationForm.elements["userName"];
const userEmailInput = registrationForm.elements["userEmail"];
const eventSelect = registrationForm.elements["eventSelect"];
const formError = document.querySelector("#formError");
const formSuccess = document.querySelector("#formSuccess");

// Populate the event dropdown with available event names
function populateEventDropdown() {
  eventSelect.innerHTML = "";
  events.forEach((event, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${event.name} (${event.seats} seats left)`;
    eventSelect.appendChild(option);
  });
}

// Form submission handler
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  formError.textContent = "";
  formSuccess.textContent = "";

  const name = userNameInput.value.trim();
  const email = userEmailInput.value.trim();
  const selectedEvent = events[eventSelect.value];

  // Basic validation
  if (!name || !email) {
    formError.textContent = "Please enter your name and email.";
    return;
  }

  if (!email.includes("@")) {
    formError.textContent = "Please enter a valid email address.";
    return;
  }

  if (selectedEvent.seats <= 0) {
    formError.textContent = "Sorry, this event is full.";
    return;
  }

  // Register the user
  selectedEvent.seats--;
  formSuccess.textContent = `🎉 Thank you, ${name}! You're registered for "${selectedEvent.name}".`;

  renderEvents(); // Update event list
  populateEventDropdown(); // Update available options
});
