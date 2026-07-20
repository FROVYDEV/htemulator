const GAME_DATABASE =
"https://raw.githubusercontent.com/FROVYDEV/htemulator/main/database/games.json";


const GAME_HOST =
"https://frovydev.github.io/htemulator/";


let games = [];


// Load games from GitHub

fetch(GAME_DATABASE)

.then(response => response.json())

.then(data => {

    games = data;

    displayGames(games);

})

.catch(error => {

    console.error("Could not load games:", error);

});




// Display game cards

function displayGames(list){


    const container =
    document.getElementById("games");


    container.innerHTML = "";


    list.forEach(game => {


        let card =
        document.createElement("div");


        card.className = "card";


        card.innerHTML = `

            <img src="${game.thumbnail}">

            <h3>${game.name}</h3>

            <p>
            Created by ${game.creator}
            </p>

            <small>
            ${game.category || "Game"}
            </small>

        `;


        card.onclick = () => {

            openGame(game);

        };


        container.appendChild(card);


    });


}




// Open selected game

function openGame(game){


    document.getElementById("games").style.display="none";


    document.getElementById("player").style.display="block";


    document.getElementById("title").innerText =
    game.name;



    let gameURL =
    GAME_HOST + game.url;



    document.getElementById("game").src =
    gameURL;


}




// Close game

function closeGame(){


    document.getElementById("games").style.display="flex";


    document.getElementById("player").style.display="none";


    document.getElementById("game").src="";


}





// Search system

document
.getElementById("search")
.addEventListener("input", function(){


    let search =
    this.value.toLowerCase();



    let filtered =
    games.filter(game =>


        game.name
        .toLowerCase()
        .includes(search)


    );



    displayGames(filtered);



});