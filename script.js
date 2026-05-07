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

// Fonction pour changer la couleur du T-shirt
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        const colorPosition = this.getAttribute('data-color');
        const version = this.getAttribute('data-version');

        // Sélectionne les images correspondantes pour cette position
        const whiteTshirt = document.getElementById(`tshirt-white-${colorPosition}`);
        const blackTshirt = document.getElementById(`tshirt-black-${colorPosition}`);
        
        if (version === 'black') {
            whiteTshirt.style.display = 'none';
            blackTshirt.style.display = 'block';
        } else {
            blackTshirt.style.display = 'none';
            whiteTshirt.style.display = 'block';
        }
    });
});
