window.onscroll = function() {setTimeout(headerSchrink, 500)};

shrinkedValue = "5rem";
unshrinkedValue = "10rem";

const buttonMenu = document.querySelectorAll('.buttonMenu');

function headerSchrink() {
    if (window.scrollY > 5) {
        document.getElementById("header").style.height = "8rem";
        document.getElementById("header").style.flexDirection = "row";
        document.getElementById("headerImage").style.width = shrinkedValue;
        document.getElementById("headerImage").style.height = shrinkedValue;
        buttonMenu.forEach(btn => {
            btn.style.width = '6rem';
        });
    } else {
        document.getElementById("header").style.height = "15rem";
        document.getElementById("header").style.flexDirection = "column";
        document.getElementById("headerImage").style.width = unshrinkedValue;
        document.getElementById("headerImage").style.height = unshrinkedValue;
        buttonMenu.forEach(btn => {
            btn.style.width = '10rem';
        });
    }
}