
// Animation for hero section carousel
let heroPage = 0;

function changePage(shift) {
    heroPage = 0 + shift;
    document.getElementById("hero-image-container").style.transform =
      "translateX(" + heroPage + "%)";
    // console.log(heroPage);
  }


