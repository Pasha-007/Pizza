const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    header.classList.add('header_scrolled');
  } else {
    header.classList.remove('header_scrolled');
  }
});

document.getElementById("add-to-cart").addEventListener("click", function() {
  // Add code here to add the item to the cart
});

// Get all the plus and minus buttons
const minusButtons = document.querySelectorAll(".grid_minus");
const plusButtons = document.querySelectorAll(".grid_plus");

// Add click event listeners to each button
minusButtons.forEach((button) => {
  button.addEventListener("click", decreaseQuantity);
});

plusButtons.forEach((button) => {
  button.addEventListener("click", increaseQuantity);
});

// Function to decrease the quantity
function decreaseQuantity(event) {
  const quantityElement = event.target.nextElementSibling;
  let quantity = parseInt(quantityElement.innerText);

  if (quantity > 0) {
    quantity--;
    quantityElement.innerText = quantity;
    updateTotal();
  }
}

// Function to increase the quantity
function increaseQuantity(event) {
  const quantityElement = event.target.previousElementSibling;
  let quantity = parseInt(quantityElement.innerText);

  quantity++;
  quantityElement.innerText = quantity;
  updateTotal();
}

function updateTotal() {
  const quantityElements = document.querySelectorAll(".grid_number");
  const price = 5; // Assuming a price of $10 per item
  let total = 0;

  quantityElements.forEach((element) => {
    const quantity = parseInt(element.innerText);
    total += quantity * price;
  });

  const totalElement = document.querySelector(".total");
  totalElement.innerText = `Total: $${total}`;
}
