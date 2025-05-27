// jQuery: Register button click handler
$(document).ready(() => {
  // Assuming each event card has a .registerBtn button with data-index attribute
  $(".registerBtn").click(function () {
    const eventIndex = $(this).data("index");
    const event = events[eventIndex];

    if (event.seats > 0) {
      event.seats--;
      alert(`🎉 Registered for "${event.name}"!`);
      renderEventsWithFade();
      populateEventDropdown();
    } else {
      alert("Sorry, this event is full.");
    }
  });
});

// Function to render events with fade animation
function renderEventsWithFade() {
  const container = $("#eventsContainer");
  container.fadeOut(300, () => {
    container.empty();
    events.forEach((event, index) => {
      const card = $(`
        <div class="eventCard">
          <h3>${event.name}</h3>
          <p>${event.date.toDateString()}</p>
          <p>Seats left: ${event.seats}</p>
          <button class="registerBtn" data-index="${index}">Register</button>
        </div>
      `);
      container.append(card);
    });
    container.fadeIn(300);
  });
}
