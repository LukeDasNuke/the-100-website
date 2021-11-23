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

// YouTube video
document.addEventListener("DOMContentLoaded",
    function() {
        var a, n,
            v = document.getElementsByClassName("video");
        for (n = 0; n < v.length; n++) {
            a = document.createElement("div");
            a.setAttribute("data-id", v[n].dataset.id);
            a.innerHTML = videoThumb(v[n].dataset.id);
            a.onclick = videoIframe;
            v[n].appendChild(a);
        }
    });

function videoThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="video thumbnail">',
        playBtn = '<span></span>';
    return thumb.replace("ID", id) + playBtn;
}

function videoIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id + "?autoplay=1");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute("frameborder", "0");
    this.parentNode.replaceChild(iframe, this);
}