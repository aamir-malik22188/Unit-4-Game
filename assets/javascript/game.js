//Define Variables for the game
var myTeam = false; 
var myOponent = false; 
var team = {}; 
var opponent = {}; 
var opponentsDefeated = 0;
var gameOver = false;

//Define team variables: German, Mexico, Spain, Russia
var teamGermany = {
    name: "Germnay",
    kickstrength: 200,
  };

var teamMexico = {
    name: "Mexico",
    kickstrength: 175,
}
var teamSpain = {
    name: "Spain",
    kickstrength: 125,
}
var teamRussia = {
    name: "Russia",
    kickstrength: 150,
}

//Write out the code to game foundation
function teamSelect(selectTeam){
    team.name = selectTeam.name;
    team.kickStrength = selectTeam.kickStrength
}

function teamOpponennt(selectOpponent){
    opponent.name = selectOpponent.name;
    opponent.kickStrength = selectOpponent.kickStrength
}

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
    $(".availableteam").removeClass("teamavailable").addClass("opponent-team");
    $("#opponent-team").append($(".opponent-team"));
  }
  
  // This function will reset the state of the game
  function resetGame() {
    // Reset all the health values to the original
    $("#germanyteam").children(".penaltykick").html(teamGermany.health);
    $("#mexicoteam").children(".penaltykick").html(teamMexico.health);
    $("#russiateam").children(".penaltykick").html(teamRussia.health);
    $("#spainteam").children(".penaltykick").html(teamSpain.health);
  

    myTeam = false;
    myOponent = false;
    opponentsDefeated = 0;
    gameOver = false;
  
    character = {};
    defender = {};
  }

  //finish adding funtions for teams

  //functions for 4 teams, if the user selects one team, what happens to the other 3

  //functions for what happens when the user beats all opponents or loses to an opponent




