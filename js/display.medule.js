

import { GamesList,MainData,DetailsData,details } from "./getData.medule.js";

    export let id = 1;

    export class DisplayGames {
        displayGamesFunc() {
          let temp = ``;
          GamesList.forEach((el) => {
            temp += `
            <div id="${el.id}" class="items col-lg-3 col-md-6 ">
            <div class="item ">
              <div class="inner borderUp  p-3">
              <img class="w-100 saturate borderR" src=${el.thumbnail} alt="">
              <div class="my-3 d-flex justify-content-between align-items-center">
                <h3 class="fw-lighter fs-6 ">${el.title}</h3>
                <span class=" btnStyle px-2 py-1">free</span>
              </div >
              <p class="pItem text-center text-muted m-0 p-0">${el.short_description
                .split(" ")
                .slice(0, 10)
                .toString()
                .replaceAll(",", " ")}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center borderDown container py-2 ">
              <span class="btnStyle2 px-2 py-0">${el.genre}</span>
              <span class="btnStyle2 px-2 py-0">${el.platform}</span>
            </div>
            <div class="layer"></div>
            </div>
          </div>
            `;
          });
          $(".gamesRow").html(temp);
          $(".items").click(function (e) { 
            id = $(this).attr("id");
            detailsDataInstance.getDetailsData(id);
            $(".sectiondetails").css("display" , "flex")
            $(".loading").css("display", "flex");
            $("body").css({overflow: "hidden"});
        

            
          });
        }
      }


      export class DisplayDetailsGames {
        displayDetailsGamesFunc() {
            details.description
            $(".imgdetails").attr("src" ,(details.screenshots[0].image)?console.log("yes"):console.log("no") );
            $(".imgdetails1").attr("src" ,details.screenshots[1].image );
            $(".titledetails").text(details.title);
            $(".categorydetails").text(details.genre);
            $(".Platformdetails").text(details.platform);
            $(".statusdetails").text(details.status);
            $(".descriptiondetails").text(details.description
              .split(" ")
              .slice(0, 100)
              .toString()
              .replaceAll(",", " "));
            $(".urldetails").attr("href",details.freetogame_profile_url)
            console.log(details.id);
        }
      }


      let detailsDataInstance = new DetailsData()

