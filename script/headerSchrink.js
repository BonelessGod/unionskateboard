window.onscroll = function() {headerSchrink()};

const headerToSchrink = document.getElementById('header');


function headerSchrink() {
    if (window.scrollY > 100) {
        
        headerToSchrink.classList.add("headerShrinked")
        
    } else {

        headerToSchrink.classList.remove("headerShrinked")
       
    }
    console.log(scrollY)
}