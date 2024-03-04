//Compter le nombre d'éléments dans le tableau slides 
document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        {
            "image": "./assets/images/slideshow/slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "./assets/images/slideshow/slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "./assets/images/slideshow/slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "./assets/images/slideshow/slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    //Balises HTML nécessaires pour chaque fonction...
    const prevArrow = document.querySelector("#banner .arrow_left");
    const nextArrow = document.querySelector("#banner .arrow_right");
    const dotsContainer = document.querySelector("#banner .dots");
    const bannerImage = document.querySelector("#banner .banner-img");
    const tagLine = document.querySelector("#banner p");

    //Diapositive initial
    let currentSlideIndex = 0;

    // Fonction pour mettre à jour les points
    function updateDots() {
        //  vider le conteneur des points avant de les recréer à chaque fois que nous mettons à jour le slider
        dotsContainer.innerHTML = "";

        // Créer les points en fonction du nombre de diapositives
        slides.forEach((slide, index) => {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (index === currentSlideIndex) {
                dot.classList.add("dot_selected");
            }
            dotsContainer.appendChild(dot);
        });
    }

    // Fonction pour afficher la diapositive actuelle
    function showSlide() {
        bannerImage.src = slides[currentSlideIndex].image;
        tagLine.innerHTML = slides[currentSlideIndex].tagLine;
        updateDots();
    }

    // Gestion des clics sur les flèches
    prevArrow.addEventListener("click", function() {
        console.log("Clic sur la flèche gauche");
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide();
    });

    nextArrow.addEventListener("click", function() {
        console.log("Clic sur la flèche droite");
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide();
    });

    // Afficher la première diapositive au chargement de la page
    showSlide();
});
