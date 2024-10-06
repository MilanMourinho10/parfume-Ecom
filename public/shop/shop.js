var modal = document.getElementById("productModal");
var modalImg = document.getElementById("modal-img");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");


var closeBtn = document.getElementsByClassName("close-btn")[0];


var cart = [];


document.addEventListener('DOMContentLoaded', function() {
  loadCartFromLocalStorage();
  updateCartIcon();
});


function loadCartFromLocalStorage() {
  var savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);  
  }
}


function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartIcon() {
  var cartCount = document.querySelector('.cart-count');
  cartCount.textContent = cart.length;
}


var buyButtons = document.querySelectorAll('.perfume-item .buy-btn');

buyButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    var productItem = event.target.closest('.perfume-item');
    var productImgSrc = productItem.querySelector('img').src;
    var productName = productItem.querySelector('h3').textContent;
    var productPrice = productItem.querySelector('p').textContent.replace('$', '');


    modalImg.src = productImgSrc;
    modalTitle.textContent = productName;
    modalDescription.textContent = "This is a detailed description of " + productName + ". Price: $" + productPrice;


    modal.style.display = "flex";


    var addToCartBtn = modal.querySelector('.buy-btn');
    addToCartBtn.onclick = function() {
     
      cart.push({
        name: productName,
        price: parseFloat(productPrice),
        image: productImgSrc
      });

      saveCartToLocalStorage();


      updateCartIcon();

      modal.style.display = "none";
    };
  });
});


closeBtn.addEventListener('click', function() {
  modal.style.display = "none";
});


window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

