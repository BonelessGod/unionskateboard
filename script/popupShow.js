// Script that will show a pop-up

function showPopup(classToShow) {

    popUp = document.querySelector(classToShow);


    if (popUp.style.display == "flex") {

        popUp.style.display = "none"

    } else {

        popUp.style.display = "flex";

    }


    console.log(popUp.style.display)
    
}

