


const rocketCard = (array) => {

  const cardReturn = array.map(indiv => {
    
    return `<li class='rocket-card'>
      <img src="${indiv.rocketPhoto}" />
      <h2>${indiv.rocketName}</h2>
      <div class='card-body'>
        <p> Launch Date: ${indiv.launchDate}</p>
        </br>
        <p>Launch Location: ${indiv.location} </p>
        </br>
        <p>Upcoming Mission Description:</p>
        <p class='card-desc'>${indiv.description}</p>
        </div>
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
      description: indiv.missions[0] ? indiv.missions[0].description : 'No description available' ,
      location: indiv.location.name

      })
    )))
    .then(() => rocketCard(rocketArr))
}

if (window.location.pathname=='/' && (window.location.pathname!='/family.html' || window.location.pathname!='/country.html')) {
  rocketCollection()
}

