formSuccess.textContent = "Submitting registration...";
formError.textContent = "";

// Simulate POST request to server
setTimeout(() => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      event: selectedEvent.name,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit registration.");
      }
      return response.json();
    })
    .then((data) => {
      selectedEvent.seats--;
      formSuccess.textContent = `🎉 Thank you, ${name}! You're registered for "${selectedEvent.name}".`;
      renderEvents();
      populateEventDropdown();
      registrationForm.reset(); // Clear the form
    })
    .catch((error) => {
      formError.textContent = `❌ ${error.message}`;
      formSuccess.textContent = "";
    });
}, 2000); // 2-second delay to simulate backend processing
