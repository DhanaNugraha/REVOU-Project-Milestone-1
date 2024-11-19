
// Animation for hero section carousel
let heroPage = 0;

function changePage(shift) {
    heroPage = 0 + shift;
    document.getElementById("hero-image-container").style.transform =
      "translateX(" + heroPage + "%)";
    // console.log(heroPage);
  }

// animation for facilities carousel

let curPos = 0

function facility(direction) {
  if (direction == 'right') {
    if (curPos == 4) {
      curPos = 0
      let newPage = 0
      console.log(curPos);
      document.getElementById("facilityCarouselContainer").style.transform ="translateX(" + newPage + "%)";
      console.log(curPos);
    }
    else {
      let newPage = (-curPos * 100) - 100
      console.log(curPos);
      document.getElementById("facilityCarouselContainer").style.transform ="translateX(" + newPage + "%)";
      console.log(curPos);
      curPos += 1
    }
    
  }

  else if (direction == 'left') {
    if (curPos == 0) {
      curPos = 4
      let newPage = -400
      console.log(curPos);
      document.getElementById("facilityCarouselContainer").style.transform ="translateX(" + newPage + "%)";
      console.log(curPos);
    }
    else {
      let newPage = (-curPos * 100) + 100
      console.log(curPos);
      document.getElementById("facilityCarouselContainer").style.transform ="translateX(" + newPage + "%)";
      console.log(curPos);
      curPos -= 1
    }
  }

  
}
