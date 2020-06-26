const rocketCard = (array) => {
  const cardReturn = array.map(indiv => {
    
    return `<li class='rocket-card'>
      <h2>${indiv.rocketName}</h2>
      <p> Launch Date: ${indiv.launchDate}</p>
      <img src="${indiv.rocketPhoto}" />
      <p>Upcoming Mission Description:</p>
      <p>${indiv.description}</p>
    </li>
    `
  })
    document
      .getElementById('appTest')
      .innerHTML = cardReturn.join('')
}

const rocketCollection = () => {
  let rocketArr = [];
  fetch('https://launchlibrary.net/1.4/launch/next/12')
    .then(response => response.json())
    .then(array => array.launches.forEach(indiv => (
      rocketArr.push({rocketName: indiv.name, 
      launchDate: indiv.windowstart, 
      rocketPhoto: indiv.rocket.imageURL, 
      locName: indiv.location.name,
      description: indiv.missions[0].description
      })
    )))
    .then(() => rocketCard(rocketArr))
}

rocketCollection()