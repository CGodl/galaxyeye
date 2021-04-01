import { countdowns, initializeClock } from './timer';


const initializeDOM = (array) => {
  const app = document.getElementById('appTest');
  
  array.forEach((indiv, index) => {
    const countdownId = `countdownId-${index}`;
  

    const rocketCard =  `<li class='rocket-card'>
      <img src="${indiv.rocketPhoto}" />
      <h2>${indiv.rocketName}</h2>
      <div class='card-body'>
        <p class='card-subtitle'> Launch Date:</p>
          <p>${indiv.launchDate}</p>
        </br>
        <p class='card-subtitle'>Launch Location: </p>
          <p> ${indiv.location} </p>
        </br>
        <p class='card-subtitle'>Countdown: </p>
          <p id=${countdownId}></p>
        </br>
        <p class='card-subtitle'>Upcoming Mission Description:</p>
        <p class='card-desc'>${indiv.description}</p>
      </div>
    </li>
    `;
    app.innerHTML += rocketCard;
    const rocketClock = initializeClock(countdownId, indiv.launchDate, index);
  
    countdowns.push(rocketClock);
  });
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
      .then(() => initializeDOM(rocketArr));
};




if ((window.location.pathname=='/' || window.location.pathname=='/index.html') && (window.location.pathname!='/family.html' || window.location.pathname!='/country.html')) {
  rocketCollection();
  countdowns.forEach(countdown => countdown.startInterval());
}

if ((window.location.pathname=='/galaxyeye/' || window.location.pathname=='/galaxyeye/index.html') && (window.location.pathname!='/galaxyeye/family.html' || window.location.pathname!='/galaxyeye/country.html')) {
  rocketCollection();
  countdowns.forEach(countdown => countdown.startInterval());
}

