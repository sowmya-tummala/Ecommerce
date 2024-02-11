document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Perform booking and scheduling logic here
  console.log(`You have booked ${service} on ${date} at ${time}`);
});
