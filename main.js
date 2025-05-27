registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formError.textContent = "";
  formSuccess.textContent = "";

  const name = userNameInput.value.trim();
  const email = userEmailInput.value.trim();
  const selectedEvent = events[eventSelect.value];

  console.log("Form submission started");
  console.log({ name, email, selectedEvent });

  if (!name || !email) {
    formError.textContent = "Please enter your name and email.";
    console.warn("Validation failed: Missing name or email");
    return;
  }

  if (!email.includes("@")) {
    formError.textContent = "Please enter a valid email address.";
    console.warn("Validation failed: Invalid email format");
    return;
  }

  if (selectedEvent.seats <= 0) {
    formError.textContent = "Sorry, this event is full.";
    console.warn("Registration failed: Event full");
    return;
  }

  formSuccess.textContent = "Submitting registration...";
  console.log("Starting fetch to submit registration");

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
        console.log("Fetch response status:", response.status);
        if (!response.ok) {
          throw new Error("Failed to submit registration.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetch successful, response data:", data);
        selectedEvent.seats--;
        formSuccess.textContent = `🎉 Thank you, ${name}! You're registered for "${selectedEvent.name}".`;
        renderEvents();
        populateEventDropdown();
        registrationForm.reset();
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        formError.textContent = `❌ ${error.message}`;
        formSuccess.textContent = "";
      });
  }, 2000);
});
