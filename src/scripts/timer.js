let countdowns = [];

const myTimer = (deadline) => {
    let theDeadline = new Date(deadline).getTime();
    let now = new Date().getTime();
    let timeleft = theDeadline - now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
   
    return {days, hours, minutes, seconds};
};


const initializeClock = (id, endtime, index) => {
  debugger;
  return {
    startInterval: setInterval(() => {
      const clock = document.getElementById(id);
      const t = myTimer(endtime);
      clock.innerHTML = `T-  D: ${t.days} | H: ${t.hours} hours | M: ${t.minutes} | S: ${t.seconds}`
      
      if (t.total <= 0) {
        clearInterval(countdowns[index].startInterval);
      }
    }, 1000),
  };
};

export {countdowns, initializeClock};






