const gameContainer = document.getElementById("game");
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];
function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
let shuffledColors = shuffle(COLORS);
let newId = 0;
function createDivsForColors(colorArray) {
    for (let color of colorArray) {
        newId += 1;
        const newDiv = document.createElement("div");
        newDiv.classList.add(color);
        newDiv.setAttribute("id", newId);
        newDiv.addEventListener("click", handleCardClick);
        gameContainer.append(newDiv);
    }
}
let cardsShown = 0;
let firstAttempt = null;
let secondAttempt;
let firstClass;
let secondClass;
let firstId;
function handleCardClick(event) {
    console.log(cardsShown);
    if (cardsShown < 2) {
        cardsShown++;
        if (event.target.getAttribute('id') === firstId) {
            cardsShown = 1;
            return;
        }
        if (cardsShown === 1) {
            firstAttempt = event.target;
            firstClass = event.target.className;
            firstId = event.target.getAttribute('id');
        } else if (cardsShown === 2) {
            secondAttempt = event.target;
            secondClass = event.target.className;
            if (firstClass !== secondClass) {
                setTimeout(function (a) {
                    firstAttempt.classList.toggle(`back${firstClass}`);
                    secondAttempt.classList.toggle(`back${secondClass}`);
                    cardsShown = 0;
                }, 1000)
            }
            else if (firstClass === secondClass) {
                setTimeout(function (a) {
                    cardsShown = 0;
                }, 1000)
            }
        }
        console.log("you just clicked", event.target.className);
        if (event.target.className === 'purple') {
            event.target.classList.toggle('backpurple');
        }
        else if (event.target.className === 'blue') {
            event.target.classList.toggle('backblue');
        }
        else if (event.target.className === 'green') {
            event.target.classList.toggle('backgreen');
        }
        else if (event.target.className === 'orange') {
            event.target.classList.toggle('backorange');
        }
        else if (event.target.className === 'red') {
            event.target.classList.toggle('backred');
        }
    }
}
createDivsForColors(shuffledColors);
