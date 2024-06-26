const items = [
    // Placeholder items, replace with your actual item data
    { name: 'Sticker 1', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 2', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 3', image: 'https://via.placeholder.com/100' },
    // ... add more items up to 50
];

const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items');
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
    const cartContainer = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const closeCartButton = document.getElementById('close-cart');

    items.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        
        itemsContainer.appendChild(itemElement);
    });

    cartButton.addEventListener('click', () => {
        cartContainer.style.display = 'flex';
    });

    closeCartButton.addEventListener('click', () => {
        cartContainer.style.display = 'none';
    });

    window.addToCart = (index) => {
        cart.push(items[index]);
        updateCart();
    };

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItemElement = document.createElement('li');
            cartItemElement.innerText = item.name;
            cartItemsContainer.appendChild(cartItemElement);
        });
        cartCount.innerText = cart.length;
    }
});
