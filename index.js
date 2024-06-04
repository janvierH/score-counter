let homeScore = 0
let homeScoreEl = document.getElementById("home-score")


// HOME CONTROLS

function homeAdd1() {
    let result = homeScore += 1;
    homeScoreEl.textContent = result
}

function homeAdd2() {
    let result = homeScore += 2;
    homeScoreEl.textContent = result
}

function homeAdd3() {
    let result = homeScore += 3;
    homeScoreEl.textContent = result
}

function homeMinus1() {
    let result = homeScore -= 1;
    homeScoreEl.textContent = result
}

function homeResetScore() {
    let result = homeScore = 0;
    homeScoreEl.textContent = result
}

// GUEST CONTROLS

let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")

function guestAdd1() {
    let result = guestScore += 1;
    guestScoreEl.textContent = result
}

function guestAdd2() {
    let result = guestScore += 2;
    guestScoreEl.textContent = result
}

function guestAdd3() {
    let result = guestScore += 3;
    guestScoreEl.textContent = result
}

function guestMinus1() {
    let result = guestScore -= 1;
    guestScoreEl.textContent = result
}

function guestResetScore() {
    let result = guestScore = 0;
    guestScoreEl.textContent = result
}

