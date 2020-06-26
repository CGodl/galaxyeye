// const breakLoc = (array) => {

//   let i = 0;
//   let rocketCollec = [];
//   while (i < array.length) {
//     let country = array[i].lsp.countryCode
//     let lsp = array[i].lsp.name 
//     let rocketName = array[i].rocket.name
//     let time = array[i].isostart
//     rocketCollec.push([country, lsp, rocketName, time])
//     i++
//   }
//   let result = rocketCollec.reduce( (acc, [country, lsp, rocketName, time]) => {
//     let curr = acc[country] = acc[country] || {};
//     curr = curr[lsp] = curr[lsp] || {};
//     curr = curr[rocketName] = curr[rocketName] || [];
//     curr.push(time);
//     return acc;
// }, {});
//   return result;
// }

// const launchLocation = () => {
//   let launchLoc = [];
//   let answer = [];
//   fetch('https://launchlibrary.net/1.4/launch/next/50')
//     .then(response => response.json())
//     .then(array => array.launches.forEach(indiv => (
//       launchLoc.push(indiv)
//     )))
//     .then(() => {
//       // console.log(breakLoc(launchLoc))
//       return breakLoc(launchLoc)
//     })      
//   }
//   let varData = launchLocation()
//   // console.log(varData)

  
  
  document.addEventListener("DOMContentLoaded", () => {

    

    
            
      });


