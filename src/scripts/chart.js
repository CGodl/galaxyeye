// const popChartCollection = () => {
//   let popChartObj = {};
//   fetch('https://launchlibrary.net/1.4/launch/next/1000')
//     .then(response => response.json())
//     .then(array => array.launches.forEach(indiv => (
//       popChartObj[indiv.location.countryCode] == undefined ? popChartObj[indiv.location.countryCode] = 0 : popChartObj[indiv.location.countryCode] += 1
//     )))
//     .then(() => {
//       console.log(popChartObj);
      
//       return popChartObj;
//     })
//     // .then(() => console.log(popChartObj))
// }

let margin = {top: 10, right: 30, bottom: 90, left: 40},
    width = 460 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;



let svg = d3.select('#my_dataviz')
  // .append('svg')
  //   .attr("width", 500)
  //   .attr("height", 500)
  // .append("g")
  //   .attr("transform",
  //         "translate(" + 15 + "," + 20 + ")");
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


  d3.json("https://launchlibrary.net/1.4/launch/next/10", function(data) {
    
    let x = d3.scaleBand()
      .range([0, width])
      .domain(data.launches.map(function(d) { return d.location.countryCode; }))
      .padding(1)
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    let y = d3.scaleLinear()
      .domain([0, 13000])
      .range([ height, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));

    svg.selectAll("myline")
      .data(data)
      .enter()
      .append("line")
        .attr("x1", function(d) { return x(d.location.countryCode); })
        .attr("x2", function(d) { return x(d.location.countryCode); })
        // .attr("y1", function(d) { return y(1); })
        .attr("y2", y(0))
        .attr("stroke", "grey")

        svg.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
          .attr("cx", function(d) { return x(d.Country); })
          .attr("cy", function(d) { return y(d.Value); })
          .attr("r", "4")
          .style("fill", "#69b3a2")
          .attr("stroke", "black")
      })






    
  // let countryChartData = d3.json("https://launchlibrary.net/1.4/launch/next/1000", data => {
  //   let popChartObj = {};
  //   data.launches.forEach(indiv => (
  //     popChartObj[indiv.location.countryCode] == undefined ? popChartObj[indiv.location.countryCode] = 0 : popChartObj[indiv.location.countryCode] += 1
  //   ))
  //   console.log(popChartObj)
  //   return popChartObj;
  // })

//   d3.json(countryChartData, data => {
    
//   // Add X axis
//   var x = d3.scaleLinear()
//   .domain([0, 13000])
//   .range([ 0, 200]);
// svg.append("g")
//   .attr("transform", "translate(0," + 200 + ")")
//   .call(d3.axisBottom(x))
//   .selectAll("text")
//     .attr("transform", "translate(-10,0)rotate(-45)")
//     .style("text-anchor", "end");

// // Y axis
// var y = d3.scaleBand()
// .range([ 0, 300 ])
// .domain(data.map(function(d) { return d.Country; }))
// .padding(1);
// svg.append("g")
// .call(d3.axisLeft(y))


// // Lines
// svg.selectAll("myline")
// .data(data)
// .enter()
// .append("line")
//   .attr("x1", function(d) { return x(d.Value); })
//   .attr("x2", x(0))
//   .attr("y1", function(d) { return y(d.Country); })
//   .attr("y2", function(d) { return y(d.Country); })
//   .attr("stroke", "grey")

// // Circles
// svg.selectAll("mycircle")
//   .data(data)
//   .enter()
//   .append("circle")
//     .attr("cx", function(d) { return x(d.Value); })
//     .attr("cy", function(d) { return y(d.Country); })
//     .attr("r", "4")
//     .style("fill", "#69b3a2")
//     .attr("stroke", "black")






//   })



if (window.location.pathname=='/country.html') {
  // console.log(countryChartData)
}




