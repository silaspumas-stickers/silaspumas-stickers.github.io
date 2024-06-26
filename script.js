const items = [
    { name: 'Mike Wazowski', image: 'mike.png' },
    { name: 'Sorry Im Late', image: 'late.png' },
    { name: 'Panic', image: 'panic.png' },
    { name: 'Im Not Distracted', image: 'distracted.png' },
    { name: 'Corgi Butt', image: 'corgi.png' },
    { name: 'I Farted', image: 'fart.png' },
    { name: 'Fire Emoji', image: 'fire.png' },
    { name: 'Hampster', image: 'hamster.png' },
    { name: 'Neutral Emoji', image: 'neutral.png' },
    { name: 'Dont Be Shellfish', image: 'shellfish.png' },
    { name: 'Thumbs Up', image: 'thumbcat.png' },
    { name: 'Uwu Emoji', image: 'uwu.png' },
    { name: 'Im Angry', image: 'talk.png' },
    { name: 'Evil Duolingo (1)', image: 'duoyourlingo.jpg' },
    { name: 'Evil Duolingo (2)', image: 'duolingo.jpg' },
    { name: '*Cries in Spanish*', image: 'spanish.png' },
    { name: 'Sarcasm Definition', image: 'sarcasm.png' },
    { name: 'Pikachu Face', image: 'pika.jng' },
    { name: '1% Remaining', image: 'percent.png' },
    { name: 'Finder Logo', image: 'finder.png' },
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

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCart();
    };

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItemElement = document.createElement('li');
            cartItemElement.innerHTML = `
                ${item.name} 
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
        cartCount.innerText = cart.length;
    }
});
