// Cacher toutes les sections au départ
const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections du document
sections.forEach(section => {
    section.style.display = 'none'; // Cache chaque section en définissant son style d'affichage à 'none'
});

// Afficher la section correspondant au lien cliqué
const links = document.querySelectorAll('nav ul li a'); // Sélectionne tous les liens de navigation dans le menu
links.forEach(link => {
    // Ajoute un écouteur d'événement pour le clic sur chaque lien
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien (naviguer vers une autre page)

        // Cacher toutes les sections
        sections.forEach(section => {
            section.style.display = 'none'; // Cache chaque section en définissant son style d'affichage à 'none'
        });

        // Afficher la section correspondante au lien
        const targetId = link.getAttribute('href').substring(1); // Récupère l'ID de la section ciblée à partir de l'attribut href du lien (en enlevant le '#')
        const targetSection = document.getElementById(targetId); // Sélectionne la section correspondant à l'ID récupéré
        if (targetSection) { // Vérifie si la section ciblée existe
            targetSection.style.display = 'block'; // Affiche la section ciblée en définissant son style d'affichage à 'block'
        }
    });
});

// Afficher la section d'accueil au début
document.getElementById('accueil').style.display = 'block'; // Affiche la section d'accueil en définissant son style d'affichage à 'block'











