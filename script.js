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
    { name: 'Evil Duolingo', image: 'duoyourlingo.jpg' },
    { name: 'Ya Like Jazz', image: 'jazz.jpg' },
    { name: '*Cries in Spanish*', image: 'spanish.png' },
    { name: 'Sarcasm Definition', image: 'sarcasm.png' },
    { name: 'Pikachu Face', image: 'pika.jpg' },
    { name: '1% Remaining', image: 'percent.png' },
    { name: 'Finder Logo', image: 'finder.jpg' },
    { name: 'Bear Holding Boba', image: 'bobabear.png' },
    { name: 'Cute Fox', image: 'fox.jpg' },
    { name: 'Baby Panda', image: 'panda.png' },
    { name: 'Hang Loose Racoon', image: 'raccoon.png' },
    { name: 'Stack of Sloths', image: 'sloth.png' },
    { name: 'Bach Bach Bach', image: 'bach.png' },
    { name: 'Catfish with Top Hat', image: 'catfish.png' },
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
