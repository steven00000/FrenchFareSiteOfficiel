document.querySelector('.scroll-arrow').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight, // Fait défiler vers le bas d'une hauteur d'écran
        behavior: 'smooth' // Défilement doux
    });
});


// Sélectionner les éléments
const tshirts = document.querySelectorAll('.tshirt');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close-button');

// Fonction pour ouvrir le pop-up
tshirts.forEach(tshirt => {
    tshirt.addEventListener('click', () => {
        popup.style.display = 'flex'; // Affiche le pop-up
    });
});

// Fonction pour fermer le pop-up
closeButton.addEventListener('click', () => {
    popup.style.display = 'none'; // Cache le pop-up
});

// Fermer le pop-up en cliquant à l'extérieur de la fenêtre
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'; // Cache le pop-up
    }
});
