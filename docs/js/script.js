let selectedCard = null;

function openModal(card) {
    selectedCard = card;
    document.getElementById(selectedCard).style.display = 'flex';
}

function closeModal() {
    document.getElementById(selectedCard).style.display = 'none';
    selectedCard = null;
}