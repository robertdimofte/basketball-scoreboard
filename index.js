let homeCount = 0;
let guestCount = 0;
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

function addOneHome(){
    homeCount += 1;
     homeScoreEl.textContent = homeCount;
     compareScore();
}

function addTwoHome(){
    homeCount += 2;
   homeScoreEl.textContent = homeCount;
   compareScore();
}

function addThreeHome(){
    homeCount += 3;
    homeScoreEl.textContent = homeCount;
    compareScore();
}

function addOneGuest(){
    guestCount += 1;
    guestScoreEl.textContent = guestCount;
    compareScore();
}

function addTwoGuest(){
    guestCount += 2;
    guestScoreEl.textContent = guestCount;
    compareScore();
}

function addThreeGuest(){
    guestCount += 3;
    guestScoreEl.textContent = guestCount;
    compareScore();
}

function compareScore(){
    if(homeCount > guestCount){
        homeScoreEl.classList.add("higher");
        guestScoreEl.classList.remove("higher");
    }else if(homeCount == guestCount){
        homeScoreEl.classList.remove("higher");
        guestScoreEl.classList.remove("higher");
    }else{
        homeScoreEl.classList.remove("higher");
        guestScoreEl.classList.add("higher");
    }
}

function resetScore(){
    homeCount = 0;
    guestCount = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    compareScore();
}
