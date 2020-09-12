

// function countdown(endDate) {
//   const total = Date.parse(endDate) - Date.parse(new Date());
//   const seconds = Math.floor( (total/1000) % 60 );
//   const minutes = Math.floor( (total/1000/60) % 60 );
//   const hours = Math.floor( (total/(1000*60*60)) % 24 );
//   const days = Math.floor( total/(1000*60*60*24) );

//   return {
//     total,
//     days,
//     hours,
//     minutes,
//     seconds
//   };
// }

const countDown = (dateTime) => {
  let workingdateTime = Date.parse(dateTime);

  let total = workingdateTime - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {total, days, hours, minutes, seconds};
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const timeinterval = setInterval(() => {
    const t = countDown(endtime);
    clock.innerHTML = 'days: ' + t.days + '<br>' +
                      'hours: '+ t.hours + '<br>' +
                      'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  },1000);
}

const deadline = 'December 31 2025';

initializeClock('timerTest', deadline)