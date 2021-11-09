// Visa eller dölj navbar overlay
function openNav() {
    document.getElementById("nav-overlay").style.width = "100%";
}
function closeNav() {
    document.getElementById("nav-overlay").style.width = "0%";
}

// Knapp för att skrolla till toppen
const topButton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 40 || document.body.scrollTop > 40) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// Funktion för att skrolla till toppen när knappen klickas
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}