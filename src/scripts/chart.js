


const popChartCollection = () => {
  let popChartObj = {};
  fetch('https://launchlibrary.net/1.4/launch/next/1000')
    .then(response => response.json())
    .then(array => array.launches.forEach(indiv => (
      // console.log(indiv)
      popChartObj[indiv.location.countryCode] == undefined ? popChartObj[indiv.location.countryCode] = 0 : popChartObj[indiv.location.countryCode] += 1
      // popChartObj[indiv.location.countryCode] >= 0 ? (popChartObj[indiv.location.countryCode]+1) : popChartObj[indiv.location.countryCode]  = 0
        
      // {
      // rocketName: indiv.name, 
      // launchDate: indiv.windowstart, 
      // rocketPhoto: indiv.rocket.imageURL, 
      // locName: indiv.location.name,
      // description: indiv.missions[0] ? indiv.missions[0].description : 'No description available' ,
      // location: indiv.location.name

      // }
    )))
    // .then(() => rocketCard(rocketArr))
    .then(() => console.log(popChartObj))
}

popChartCollection();