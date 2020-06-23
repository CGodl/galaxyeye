
// fetch('https://launchlibrary.net/1.4/launch/next/50')
//   .then(response => response.json())
//   .then(array => console.log(array.launches))

// fetch('https://launchlibrary.net/1.4/launch/next/50')
//   .then(response => response.json())
//   .then(array => array.launches.map(indiv => {
//     console.log({ rocketName: indiv.name, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name})

//   }))






// fetch('https://launchlibrary.net/1.4/launch/next/10')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const launchRender = data.launches.map(indiv => {
//       return `<p>${indiv.name}, ${indiv.location.name}</p>`
//     })
  
//     document
//       .getElementById('appTest')
//       .innerHTML = launchRender
//   })


  // function rocketCard() {
    fetch('https://launchlibrary.net/1.4/launch/next/10')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const launchRender = data.launches.map(indiv => {
        
        console.log({ name: rocket.name, locName: rocket.location.name })
        return{ rocketName: indiv.name, rocketFamily: indiv.rocket.familyname, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name }
      })
  
      // document
      //   .getElementById('appTest')
      //   .innerHTML = launchRender
  })





