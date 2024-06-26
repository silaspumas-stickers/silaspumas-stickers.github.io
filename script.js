const items = [
    { name: 'Sticker 1', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 2', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 3', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 4', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 5', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 6', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 7', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 8', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 9', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 10', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 11', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 12', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 13', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 14', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 15', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 16', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 17', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 18', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 19', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 20', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 21', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 22', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 23', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 24', image: 'https://via.placeholder.com/100' },
    { name: 'Sticker 25', image: 'https://via.placeholder.com/100' },
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
