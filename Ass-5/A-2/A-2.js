// Step 1: Define the timer function
function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

// Step 2: Example usage
timer(2000, function(message) {
  console.log(message);
});
