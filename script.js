//Grabbing the hmtl classes
const button = document.querySelector('.submit');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const tempurature = document.querySelector('.tempurature');

//Event Click
button.addEventListener('click', function () {
  //Grab Javascript API
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=c1b51bf6211efee4e385962f09fbc9c6')
    .then(response => response.json())
    .then(data => {
      let nameValue = data['name'];
      let tempValue = data['main']['temp'];
      var descriptionValue = data['weather'][0]['description'];

      name.innerHTML = nameValue;
      tempurature.innerHTML = tempValue;
      description.innerHTML = descriptionValue;

      // tempurature.value = roundNum(tempValue)

    })


    .catch(err => alert("Wrong city name"))

  // console.log("this is working fine")
})







