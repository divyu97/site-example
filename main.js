const len = document.querySelectorAll(".image").length;
let start = -1;

function showImg(number) {
    let images = Array.from(document.querySelectorAll(".image"));
    images[number].style.display = "block";
    images.splice(number, 1);
    images.forEach((img) => {
        img.style.display = "none";
    });
}

function slideshow() {
    start = (start + 1) % len;
    showImg(start);
}

slideshow();

setInterval(slideshow, 5000);