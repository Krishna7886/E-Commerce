document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartSummary = document.getElementById('cart-summary');
    const cartSubtotalSpan = document.getElementById('cart-subtotal');
    const cartTotalSpan = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const cartCountNav = document.getElementById('cart-count-nav'); // For the count in the header

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = ''; // Clear existing items
        let subtotal = 0;

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartSummary.style.display = 'none';
        } else {
            emptyCartMessage.style.display = 'none';
            cartSummary.style.display = 'block';

            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.dataset.id = item.id;

                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;

                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p>Unit Price: $${item.price.toFixed(2)}</p>
                    </div>
                    <div class="item-quantity">
                        <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                    </div>
                    <div class="item-price">$${itemTotal.toFixed(2)}</div>
                    <button class="remove-item-btn" data-id="${item.id}">&#x2715;</button>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }

        cartSubtotalSpan.textContent = `$${subtotal.toFixed(2)}`;
        // For simplicity, shipping is free for now. Total equals subtotal.
        cartTotalSpan.textContent = `$${subtotal.toFixed(2)}`;
        cartCountNav.textContent = `(${cart.length})`;

        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
        attachEventListeners();
    }

    function attachEventListeners() {
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.onclick = (event) => {
                const id = parseInt(event.target.dataset.id);
                const itemIndex = cart.findIndex(item => item.id === id);
                if (itemIndex > -1) {
                    cart[itemIndex].quantity++;
                    updateCartDisplay();
                }
            };
        });

        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.onclick = (event) => {
                const id = parseInt(event.target.dataset.id);
                const itemIndex = cart.findIndex(item => item.id === id);
                if (itemIndex > -1 && cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity--;
                    updateCartDisplay();
                } else if (itemIndex > -1 && cart[itemIndex].quantity === 1) {
                    // If quantity is 1, remove the item
                    cart = cart.filter(item => item.id !== id);
                    updateCartDisplay();
                }
            };
        });

        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.onclick = (event) => {
                const id = parseInt(event.target.dataset.id);
                cart = cart.filter(item => item.id !== id);
                updateCartDisplay();
            };
        });
    }

    clearCartBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your entire cart?')) {
            cart = [];
            updateCartDisplay();
        }
    });

    // Initial load
    updateCartDisplay();
});
