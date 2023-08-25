
import { DisplayGames,id,DisplayDetailsGames } from "./display.medule.js";

export let GamesList = [];
export let details
// 
export class MainData {
  getMainAllData = async function getMainData(caterory = "MMORPG") {
    $(".loading").css("display", "flex");
    $("body").css({overflow: "hidden"});

    // let url = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc%20%2C%20browser&category=${caterory}`;

    let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&category=${caterory}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e11619b799mshee07b65223bc50fp12b104jsn8f66823ba722",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let value = await fetch(url, options);

  
    let data = await value.json();
    GamesList = data;
    let display = new DisplayGames();
    display.displayGamesFunc()
    $(".loading").fadeOut(3000 , function(){
    $("body").css({overflow: "auto"});
  } );
  

  };
}

// 
export class DetailsData {
  getDetailsData = async function getMainData(id="1") {
    $(".loading").css("display", "flex");
    $("body").css({overflow: "hidden"});

    let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e11619b799mshee07b65223bc50fp12b104jsn8f66823ba722',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    let value = await fetch(url, options);
    let data = await value.json();
    details = data;
    let display = new DisplayDetailsGames();
    display.displayDetailsGamesFunc()
    $(".loading").fadeOut(3000 , function(){
    // $("body").css({overflow: "auto"});
  } );
  

  };
}
