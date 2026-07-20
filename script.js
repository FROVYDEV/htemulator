const GAME_DATABASE =
"https://raw.githubusercontent.com/FROVYDEV/htemulator/main/database/games.json";


const GAME_HOST =
"https://frovydev.github.io/htemulator/";


let games = [];





// LOGIN SYSTEM

window.onload = function(){


let savedUser =
localStorage.getItem("htemulatorUser");



if(savedUser){


document.getElementById("login").style.display="none";

document.getElementById("launcher").style.display="block";


}

else{


document.getElementById("login").style.display="block";

document.getElementById("launcher").style.display="none";


}


};





function login(){


let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



if(username && password){


localStorage.setItem(
"htemulatorUser",
username
);



document.getElementById("login").style.display="none";


document.getElementById("launcher").style.display="block";



}

else{


document.getElementById("loginMessage").innerText =
"Please enter a username and password";


}


}







// LOAD GAMES


fetch(GAME_DATABASE)

.then(response => response.json())

.then(data => {


games = data;


displayGames(games);


})


.catch(error => {


console.error(
"Could not load games:",
error
);


});







// DISPLAY GAMES


function displayGames(list){


const container =
document.getElementById("games");


container.innerHTML="";



list.forEach(game => {



let card =
document.createElement("div");


card.className="card";



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







// OPEN GAME


function openGame(game){


document.getElementById("launcher").style.display="none";


document.getElementById("player").style.display="block";



document.getElementById("gameTitle").innerText =
game.name;



document.getElementById("gameFrame").src =
GAME_HOST + game.url;



}







// CLOSE GAME


function closeGame(){


document.getElementById("launcher").style.display="block";


document.getElementById("player").style.display="none";


document.getElementById("gameFrame").src="";


}








// SEARCH


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
