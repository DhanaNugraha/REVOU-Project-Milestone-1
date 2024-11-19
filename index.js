
// Animation for hero section carousel

function changePageHero(shift) {
    let heroPage = shift;
    document.getElementById("hero-image-container").style.transform =
      "translateX(" + heroPage + "%)";
    // console.log(expPage);
  }

// animation for facilities carousel

let curPosFacility = 0

function facility(direction) {
  if (direction == 'right') {
    if (curPosFacility == 4) {
      curPosFacility = 0
      let newPage = 0
      // console.log(curPosFacility);
      document.getElementById("facilityCarouselContainer").style.transform ="translateX(" + newPage + "%)";
      // console.log(curPosFacility);
    }
    else {
      let newPage = (-curPosFacility * 100) - 100 - (4*(curPosFacility+1))
      // 100 for normal shift, 4 for margin
      // console.log(curPosFacility);
      document.getElementById("facilityCarouselContainer").style.transform ="translateX(" + newPage + "%)";
      // console.log(curPosFacility);
      curPosFacility += 1
    }
    
  }

  else if (direction == 'left') {
    if (curPosFacility == 0) {
      curPosFacility = 4
      let newPage = -400
      // console.log(curPosFacility);
      document.getElementById("facilityCarouselContainer").style.transform ="translateX(" + newPage + "%)";
      // console.log(curPosFacility);
    }
    else {
      let newPage = (-curPosFacility * 100) + 100 + (4*(curPosFacility-1))
      // console.log(curPosFacility);
      document.getElementById("facilityCarouselContainer").style.transform ="translateX(" + newPage + "%)";
      // console.log(curPosFacility);
      curPosFacility -= 1
    }
  }
}

// Animation for experience section carousel

function changePageExp(page) {
    // document.getElementById("exp"+ String(expPage) ).style.display =
    //   "block";

    for (let i = 1; i < 5; i++) {
      // console.log("exp" + i)
      document.getElementById("exp" + i).style.display ="none";
    }

    document.getElementById("exp" + page).style.display ="block";

  
    // document.getElementsById("exp4").style.display =
    // "none";
  }
