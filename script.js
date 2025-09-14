// --- Part 2: JavaScript Functions ---

// Global variable example
let globalValue = 10;

// Function with parameters and return value
function multiply(a, b) {
  // Local scope: a, b, result
  let result = a * b;
  return result;
}

// Function to update DOM with calculation
function showCalculation() {
  // Uses globalValue and local variable
  const calcResult = multiply(globalValue, 5);
  document.getElementById('calcResult').textContent = `Result: ${calcResult}`;
}

// Event listener for calculation button
document.getElementById('calcBtn').addEventListener('click', showCalculation);

// --- Part 3: Combining CSS & JavaScript ---

// Reusable function to trigger animation
function triggerAnimation(element, className, duration = 1000) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
  }, duration);
}

// Animate box on button click
document.getElementById('animateBoxBtn').addEventListener('click', function() {
  const box = document.getElementById('animatedBox');
  triggerAnimation(box, 'animate', 1000);
});

// Modal popup logic
const modal = document.getElementById('modal');
const showModalBtn = document.getElementById('showModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

showModalBtn.addEventListener('click', function() {
  modal.classList.add('show');
});

closeModalBtn.addEventListener('click', function() {
  modal.classList.remove('show');
});

// --- End of assignment scaffold ---