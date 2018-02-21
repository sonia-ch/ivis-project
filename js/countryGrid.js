var margin = { top: 70, right: 100, bottom: 10, left: 10 },
  width = 2000 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

svg = d3.select("#country-grid")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

var squareWidthHeight = 100;
var squareMarginX = 10;
var numRows = 10;
var squareHoverSizeIncrease = 50;
var zoomOffset = 5;

var xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, squareWidthHeight])

d3.csv("data/1951-data.csv", function(error, data){
  if(error) throw error;

  // Create g element for each data point
  var square = svg.selectAll(".rect-container")
      .data(data).enter()
    .append("g")
      .attr("class", "rect-container")

  // append a sqare svg element in each g container
  square
    .append("rect")
      .attr("width", squareWidthHeight)
      .attr("height", squareWidthHeight)
      .attr("stroke-width", 3)
      .attr("stroke", "black")
      .on("mouseover", function(d){
        var currentX = d3.select(this).attr("x")
        var currentY = d3.select(this).attr("y")
        d3.select(this)
          .attr("x", +currentX - +squareHoverSizeIncrease - +zoomOffset)
          .attr("y", +currentY - +squareHoverSizeIncrease - +zoomOffset)
          .attr("width", +squareWidthHeight + +squareHoverSizeIncrease)
          .attr("height", +squareWidthHeight + +squareHoverSizeIncrease)
      })
      .on("mouseleave", function(d) {
        var currentX = d3.select(this).attr("x")
        var currentY = d3.select(this).attr("y")
        d3.select(this)
          .attr("x", +currentX + +squareHoverSizeIncrease + +zoomOffset)
          .attr("y", +currentY + +squareHoverSizeIncrease + +zoomOffset)
          .attr("width", squareWidthHeight)
          .attr("height", squareWidthHeight)
      })
      .attr("x", function(d,i) {
        return i%numRows * (squareWidthHeight + squareMarginX);
      })
      .attr("y", function(d,i) {
        return Math.floor(i/numRows) * (squareWidthHeight + squareMarginX);
      })
      .attr("fill", "white")

});



