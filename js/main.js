$(function () {



});

import { DisplayGames,id } from "./display.medule.js";
import { GamesList,MainData,DetailsData } from "./getData.medule.js";


console.log(id);

$("ul li a").click(function (e) {

  $(this).addClass("active");
  $("ul li a").not(this).removeClass("active");
  let category = $(this).attr("type")
  mainDataInstance.getMainAllData(category);
});

let mainDataInstance = new MainData();
mainDataInstance.getMainAllData();
let detailsDataInstance = new DetailsData();
detailsDataInstance.getDetailsData(id);

$(".closedetails").click(function(){
  $(".sectiondetails").css("display" , "none");
      $("body").css({overflow: "auto"});


})






  



