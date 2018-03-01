
// Example click event with Jquery
$("#clickButton").on("click", function(){
  getCountriesFromYear(2000, function(res){
    console.log(res);
  });
});

// Toggle map when button clicked
$("#toggleMap").on("click",function(){
  $("#map-holder").toggle();
})


$("#inoutChange").on("click", function() {
  if(inOut === "In") inOut = "Out";
  else inOut = "In";

  console.log("loading", inOut);

  loadCountryData();
})

// drawBars("#right-side-bar-chart",xComp="letter",yComp="frequency",yAxisTitle="",height=200,width=500, xP=0, yP=0, showAxis=true)