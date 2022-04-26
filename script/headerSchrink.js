window.onscroll = function() {headerSchrink()};

const headerToSchrink = document.querySelector('.header');
const headerBlockToSchrink = document.querySelector('.header__blocker');
const headerTitle = document.querySelector('.header__title');

function headerSchrink() {
    if (window.scrollY > 100) {
        
        headerToSchrink.classList.add("--shrinked");
        headerBlockToSchrink.classList.add("--shrinked");
        headerTitle.style.display = "none";
        
    } else {

        headerToSchrink.classList.remove("--shrinked");
        headerBlockToSchrink.classList.remove("--shrinked");
        headerTitle.style.display = "block";
       
    }
    console.log(scrollY)
}