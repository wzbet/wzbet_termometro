document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-image");

    galleryImages.forEach((image) => {
        const randomPercentage = Math.floor(Math.random() * 100) + 1;
        image.setAttribute("data-percentage", randomPercentage);
    });

    // Sort the images by percentage (high to low)
    const sortedImages = Array.from(galleryImages).sort((a, b) => {
        const percentageA = parseInt(a.getAttribute("data-percentage"));
        const percentageB = parseInt(b.getAttribute("data-percentage"));
        return percentageB - percentageA;
    });

    const galleryContainer = document.querySelector(".gallery-container");
    galleryContainer.innerHTML = "";
    sortedImages.forEach((image) => {
        galleryContainer.appendChild(image);
    });
});