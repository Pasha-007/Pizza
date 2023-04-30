const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    header.classList.add('header_scrolled');
  } else {
    header.classList.remove('header_scrolled');
  }
});


const plusBtns = document.querySelectorAll('.grid_plus');
const minusBtns = document.querySelectorAll('.grid_minus');

// Add click event listeners to all plus and minus buttons
for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener('click', increment);
  minusBtns[i].addEventListener('click', decrement);
}

// Function to increment the value of the input field
function increment(event) {
  // Get the counter div element
  const counter = event.target.parentNode;
  // Get the input field element inside the counter div
  const inputField = counter.querySelector('.grid_counter-input');
  // Get the current value of the input field
  let currentValue = parseInt(inputField.value);
  // Increment the value by 1
  currentValue++;
  // Set the new value of the input field
  inputField.value = currentValue;
}

// Function to decrement the value of the input field
function decrement(event) {
  // Get the counter div element
  const counter = event.target.parentNode;
  // Get the input field element inside the counter div
  const inputField = counter.querySelector('.grid_counter-input');
  // Get the current value of the input field
  let currentValue = parseInt(inputField.value);
  // Decrement the value by 1, but don't go below 1
  if (currentValue > 1) {
    currentValue--;
  }
  // Set the new value of the input field
  inputField.value = currentValue;
}

document.getElementById("add-to-cart").addEventListener("click", function() {
  // Add code here to add the item to the cart
});