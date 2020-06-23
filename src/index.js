import './styles/index.scss'


const rocketCard = (array) => {
  console.log(array)
  const cardReturn = array.map(indiv => {
    
    return `<li class='rocket-card'>
      <h2>${indiv.rocketName}</h2>
      <p> Launch Date: ${indiv.launchDate}</p>
      <img src="${indiv.rocketPhoto}" />
    </li>
    `
  })
    document
      .getElementById('appTest')
      .innerHTML = cardReturn.join('')
}


const rocketCollection = () => {
  let rocketArr = [];
  fetch('https://launchlibrary.net/1.4/launch/next/8')
    .then(response => response.json())
    .then(array => array.launches.forEach(indiv => (
      rocketArr.push({rocketName: indiv.name, 
      launchDate: indiv.windowstart, 
      rocketPhoto: indiv.rocket.imageURL, 
      locName: indiv.location.name
      })
    )))
    .then(() => rocketCard(rocketArr))
}

rocketCollection()




// rocketCollection()


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
//   const rockeyArr = []
//   fetch('https://launchlibrary.net/1.4/launch/next/5')
//     .then(response => response.json())
//     .then(array => array.launches.forEach => {
//       rocketArr.push({ rocketName: indiv.name, 
//                         launchDate: indiv.windowstart, 
//         rocketPhoto: indiv.rocket.imageURL, 
//         locName: indiv.location.name, 
//         agencyName: ((indiv.rocket.agencies[0] === undefined) ? indiv.rocket.agencies[0].name : "N/A"),
//         missionName:  ((indiv.missions) ? indiv.missions.name : "N/A"),
//         missionDesc: ((indiv.missions) ? indiv.missions[0].description : "N/A")
//       })


//     })























  // const rocketCard = () => {
  //   fetch('https://launchlibrary.net/1.4/launch/next/10')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     const launchRender = data.launches.map(indiv => {
        
  //       console.log({ name: rocket.name, locName: rocket.location.name })
  //       return{ rocketName: indiv.name, rocketFamily: indiv.rocket.familyname, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name }
  //     })
  
  //     document
  //       .getElementById('appTest')
  //       .innerHTML = launchRender
  // })








// // fetch('https://launchlibrary.net/1.4/launch/next/50')
// //   .then(response => response.json())
// //   .then(array => console.log(array.launches))

// // fetch('https://launchlibrary.net/1.4/launch/next/50')
// //   .then(response => response.json())
// //   .then(array => array.launches.map(indiv => {
// //     console.log({ rocketName: indiv.name, 
// //                     launchDate: indiv.windowstart, 
// //                     rocketPhoto: indiv.rocket.imageURL, 
// //                     locName: indiv.location.name, 
// //                     // agencyName: ((indiv.rocket.agencies[0] === undefined) ? indiv.rocket.agencies[0].name : "N/A"),
// //                     // missionName:  ((indiv.missions) ? indiv.missions.name : "N/A"),
// //                     // missionDesc: ((indiv.missions) ? indiv.missions[0].description : "N/A")
// //                   })
// //   }))






// // fetch('https://launchlibrary.net/1.4/launch/next/10')
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log(data);
// //     const launchRender = data.launches.map(indiv => {
// //       return `<p>${indiv.name}, ${indiv.location.name}</p>`
// //     })
  
// //     document
// //       .getElementById('appTest')
// //       .innerHTML = launchRender
// //   })


//   // const rocketCard = () => {
//   //   fetch('https://launchlibrary.net/1.4/launch/next/10')
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     console.log(data);
//   //     const launchRender = data.launches.map(indiv => {
        
//   //       console.log({ name: rocket.name, locName: rocket.location.name })
//   //       return{ rocketName: indiv.name, rocketFamily: indiv.rocket.familyname, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name }
//   //     })
  
//   //     document
//   //       .getElementById('appTest')
//   //       .innerHTML = launchRender
//   // })


// // const collectedRockets = () => {
// //   fetch('https://launchlibrary.net/1.4/launch/next/5')
// //     .then(response => response.json())
// //     .then(data => { 
// //       const rocketArr = data.launches.map(indiv => {
// //         return {
// //         rocketName: indiv.name, rocketFamily: indiv.rocket.familyname, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name
// //         }
// //       }
// //       )
// //   //     return rocketArr
// //   //   }
// //   }


//   const rocketCard = () => {
//     fetch('https://launchlibrary.net/1.4/launch/next/10')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       const launchRender = data.launches.map(indiv => {
        
//         console.log({ name: rocket.name, locName: rocket.location.name })
//         return{ rocketName: indiv.name, rocketFamily: indiv.rocket.familyname, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name }
//       })
  
//       document
//         .getElementById('appTest')
//         .innerHTML = launchRender
//   })




//   // fetch('https://launchlibrary.net/1.4/launch/next/10')
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     console.log(data);
//   //     const launchRender = data.launches.map(indiv => {
//   //       return `<p>${indiv.name}, ${indiv.location.name}</p>`
//   //     })
    
//   //     document
//   //       .getElementById('appTest')
//   //       .innerHTML = launchRender
//   //   })

  




// // function rocketCard() {
// //   const rockeyArr = []
// //   fetch('https://launchlibrary.net/1.4/launch/next/5')
// //     .then(response => response.json())
// //     .then(array => array.launches.map => {
// //       rocketArr.push({ rocketName: indiv.name, 
// //                         launchDate: indiv.windowstart, 
// //         rocketPhoto: indiv.rocket.imageURL, 
// //         locName: indiv.location.name, 
// //         // agencyName: ((indiv.rocket.agencies[0] === undefined) ? indiv.rocket.agencies[0].name : "N/A"),
// //         // missionName:  ((indiv.missions) ? indiv.missions.name : "N/A"),
// //         // missionDesc: ((indiv.missions) ? indiv.missions[0].description : "N/A")
// //       })


// //     })

// // 