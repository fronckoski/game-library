let mainDisplay = document.getElementById("main-display")

let myLibrary = []

function Game(title, developer, hours, played_status, id) {
    this.title = title
    this.developer = developer
    this.hours = hours
    this.played_status = played_status
    this.id = id
    
    this.info = function() {
        return title + " by " + developer + ", " + hours + " hours, " + played_status
    }
}
function addGametoLibrary(game){
    myLibrary.push(game)
}
function createGameElement(game) {
    const gameElement = document.createElement("div")
    gameElement.className = "game-content"
    gameElement.setAttribute("id", game.id)

    const gameTitle = document.createElement("p")
    gameTitle.className = "title-element"
    gameTitle.innerHTML = game.title

    const gameDeveloper = document.createElement("p")
    gameDeveloper.className = "developer-element"
    gameDeveloper.innerHTML = "By: " + game.developer

    const gameHours = document.createElement("p")
    gameHours.className = "hours-element"
    gameHours.innerHTML = "Play Time: " + game.hours + " hours."

    const playedButton = document.createElement("button")
    if (game.played_status == false) {
        playedButton.className = "not-played-button"
        playedButton.innerHTML = "Not Played"
    } else {
        playedButton.className = "played-button"
        playedButton.innerHTML = "Played"
    }
    playedButton.addEventListener("click", function(){
        if (playedButton.className == "played-button"){
            playedButton.className = "not-played-button"
            playedButton.innerHTML = "Not Played Yet"
        } else {
            playedButton.className = "played-button"
            playedButton.innerHTML = "Played"
        }
    })
    gameElement.appendChild(gameTitle);
    gameElement.appendChild(gameDeveloper);
    gameElement.appendChild(gameHours);
    gameElement.appendChild(playedButton);
    return gameElement;
}
function displayLibrary(){
    for(let i = 0; i < myLibrary.length; i++){
        const newGame = createGameElement(myLibrary[i])
        console.log(myLibrary[i])
        mainDisplay.appendChild(newGame)
    }
}
function openForm(){
    document.getElementById("add-game-form").style.display = "block";
}
function closeForm(){
    document.getElementById("add-game-form").style.display = "none";
}

function addGameViaForm(){
    const title = document.getElementById("formTitle").value;
    var id = document.getElementById("formTitle").value;
    const developer = document.getElementById("formDeveloper").value;
    const hours = document.getElementById("formHours").value;
    var played_status = document.getElementsByName("played-status");

    //For loop to check if check box is checked, and converting the played_status variable to boolean.
    played_status.forEach((check) => {
        if (check.checked) {
            played_status = true;
        } else {
            played_status = false;
        };
    });
    const new_game = new Game(title, developer, hours, played_status, id);
    addGametoLibrary(new_game);
    closeForm();
    mainDisplay.appendChild(createGameElement(new_game));
}

const half_life = new Game("Half-Life", "Valve", "14", false, "halflife")
const metro_exodus = new Game("Metro: Exodus", "4A Games", "13", true, "metroexodus")
addGametoLibrary(metro_exodus);
addGametoLibrary(half_life);

displayLibrary();