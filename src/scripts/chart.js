


const popChartCollection = () => {
  let popChartObj = {};
  fetch('https://launchlibrary.net/1.4/launch/next/1000')
    .then(response => response.json())
    .then(array => array.launches.forEach(indiv => (
      popChartObj[indiv.location.countryCode] == undefined ? popChartObj[indiv.location.countryCode] = 0 : popChartObj[indiv.location.countryCode] += 1
    )))
    .then(() => console.log(popChartObj))
}
if (window.location.pathname=='/country.html') {
  console.log('hello')
  popChartCollection()
}