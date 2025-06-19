let images = [
    "/images/loginbg.jpg",
    "/images/sample_img1.png",
    "/images/sample_img2.png"
];

let item = document.getElementById('item');
let place_image = document.getElementById('place-img');

function startCarousel() {
    let len = images.length - 1;
    setInterval(() => {
        if (len >= 0) {
            place_image.src = images[len];
            len--;
        }
        else {
            len = images.length - 1;
        }
    }, 2000);
}

document.querySelectorAll(".bouncing-letters>span")
    .forEach((element) => {
        element.addEventListener("mouseover",
            (e) => bounce(e.target));
    });

function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
        letter.classList.add("bounce");
        setTimeout(
            function () {
                letter.classList.remove("bounce");
            },
            1000
        );
    }
}