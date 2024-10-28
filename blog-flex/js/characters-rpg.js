function showModal(title, description, imageUrl, quote = '') {
    document.getElementById('modal-title').innerHTML = title; 
    document.getElementById('modal-description').innerHTML = description;
    document.getElementById('modal-image').src = imageUrl;

    const existingQuote = document.querySelector('.italic-quote');
    if (existingQuote) {
        existingQuote.remove();
    }

    if (quote) {
        const quoteElement = document.createElement('p');
        quoteElement.innerHTML = quote; 
        quoteElement.className = 'italic-quote'; 
        document.querySelector('.modal-content').appendChild(quoteElement);
    }

    const modalImage = document.getElementById("modal-image");
    if (title === 'Shadowheart' || title === 'Lae’zel') {
        modalImage.style.maxWidth = '200px';
    } else {
        modalImage.style.maxWidth = '300px';
    }

    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
