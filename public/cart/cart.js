var cart = [];


var cartItemsContainer = document.getElementById("cart-items");
var cartTotalElement = document.getElementById("cart-total");


function updateCartDisplay() {

  cartItemsContainer.innerHTML = '';
  let total = 0;


  cart.forEach(function(item, index) {
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>$${item.price}</p>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price;
  });


  cartTotalElement.textContent = `Total: $${total}`;
}


cartItemsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-btn')) {
    var index = event.target.getAttribute('data-index');
    cart.splice(index, 1);
    updateCartDisplay();
    saveCartToLocalStorage();
  }
});


function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


function loadCartFromLocalStorage() {
  var savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartDisplay();
  }
}

document.getElementById('checkout-btn').addEventListener('click', function() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  alert('Thank you for your purchase!');
  cart = [];
  updateCartDisplay();
  saveCartToLocalStorage();
});


loadCartFromLocalStorage();

