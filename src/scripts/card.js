import { myTimer } from './timer';


const rocketCard = (array) => {

  const cardReturn = array.map(indiv => {
  

    return `<li class='rocket-card'>
      <img src="${indiv.rocketPhoto}" />
      <h2>${indiv.rocketName}</h2>
      <div class='card-body'>
        <p class='card-subtitle'> Launch Date:</p>
          <p>${indiv.launchDate}</p>
        </br>
        <p class='card-subtitle'>Launch Location: </p>
          <p> ${indiv.location} </p>
        </br>
        <p class='card-subtitle'>Upcoming Mission Description:</p>
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
 
  // fetch('https://ll.thespacedevs.com/2.0.0/launch/upcoming/?limit=12') //Live Data subject to limits
  fetch('https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?limit=12') //Fetch stale data for development
    .then(response => response.json())
    .then(response => response.results.forEach(indiv => (
      rocketArr.push({
        rocketName: indiv.name,
        launchDate: indiv.window_start,
        rocketPhoto: indiv.image, 
        location: indiv.pad.location.name,
        description: indiv.mission ? indiv.mission.description : 'No description available'
      }))))
      .then(() => rocketCard(rocketArr))
};


if ((window.location.pathname=='/' || window.location.pathname=='/index.html') && (window.location.pathname!='/family.html' || window.location.pathname!='/country.html')) {
  rocketCollection()
}

if ((window.location.pathname=='/galaxyeye/' || window.location.pathname=='/galaxyeye/index.html') && (window.location.pathname!='/galaxyeye/family.html' || window.location.pathname!='/galaxyeye/country.html')) {
  rocketCollection()
}

