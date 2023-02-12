let countHome = 0
let countGuest = 0
let guest = document.getElementById("score-guest")
let home = document.getElementById("score-home")

function btnG1() {
    countGuest += 1
    guest.textContent = countGuest
}

function btnG2() {
    countGuest += 2
    guest.textContent = countGuest
}

function btnG3() {
    countGuest += 3
    guest.textContent = countGuest
}

function btn1() {
    countHome += 1
    home.textContent = countHome
}

function btn2() {
    countHome += 2
    home.textContent = countHome
}

function btn3() {
    countHome += 3
    home.textContent = countHome
}

function newGame() {
    countHome = 0
    countGuest = 0
    home.textContent = countHome
    guest.textContent = countGuest
}
