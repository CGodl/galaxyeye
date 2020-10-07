const countDown = (dateTime) => {
  let workingdateTime = Date.parse(dateTime);

  let total = workingdateTime - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {total, days, hours, minutes, seconds};
}

// function timer(endTime) {
//   let clock;
//   const timeinterval = setInterval(() => {
//     const t = countDown(endtime);
//     clock.innerHTML = 'days: ' + t.days + '<br>' +
//                       'hours: '+ t.hours + '<br>' +
//                       'minutes: ' + t.minutes + '<br>' +
//                       'seconds: ' + t.seconds;
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   },1000);
//   return clock;
// }




const rocketCard = (array) => {

  const cardReturn = array.map(indiv => {
    
    return `<li class='rocket-card'>
      <img src="${indiv.rocketPhoto}" />
      <h2>${indiv.rocketName}</h2>
  
      <p> Launch Date: ${indiv.launchDate}</p>
      <p>Launch Location: ${indiv.location} </p>
      <p>Upcoming Mission Description:</p>
      <p class='card-desc'>${indiv.description}</p>
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

rocketCollection()