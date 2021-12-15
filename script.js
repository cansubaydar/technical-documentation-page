const backToTopButton = document.querySelector(".back-to-top-button");

window.addEventListener("scroll", scrollUp);

function scrollUp() {
    if (window.pageYOffset > 200) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", pageToUp);

function pageToUp() {
    scrollTo(0, 0);
}