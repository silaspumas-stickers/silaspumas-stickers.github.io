const items = [
    { name: 'Sticker 1', image: 'img1.png' },
    { name: 'Sticker 2', image: 'img2.png' },
    { name: 'Sticker 3', image: 'img3.png' },
    { name: 'Sticker 4', image: 'img4.png' },
    { name: 'Sticker 5', image: 'img5.png' },
    { name: 'Sticker 6', image: 'img6.png' },
    { name: 'Sticker 7', image: 'img7.png' },
    { name: 'Sticker 8', image: 'img8.png' },
    { name: 'Sticker 9', image: 'img9.png' },
    { name: 'Sticker 10', image: 'img10.png' },
    { name: 'Sticker 11', image: 'img11.png' },
    { name: 'Sticker 12', image: 'img12.png' },
    { name: 'Sticker 13', image: 'img13.png' },
    { name: 'Sticker 14', image: 'img14.png' },
    { name: 'Sticker 15', image: 'img15.png' },
    { name: 'Sticker 16', image: 'img16.png' },
    { name: 'Sticker 17', image: 'img17.png' },
    { name: 'Sticker 18', image: 'img18.png' },
    { name: 'Sticker 19', image: 'img19.png' },
    { name: 'Sticker 20', image: 'img20.png' },
    { name: 'Sticker 21', image: 'img21.png' },
    { name: 'Sticker 22', image: 'img22.png' },
    { name: 'Sticker 23', image: 'img23.png' },
    { name: 'Sticker 24', image: 'img24.png' },
    { name: 'Sticker 25', image: 'img25.png' },
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
