let url = 'https://api.openweathermap.org/data/2.5/'
let apikey = 'cc7c8fdfcbbccc9dc62e21bde4bb83ee'

let setQuery = (e) => {
  if (e.keyCode == '13') getResult(input.value)
  
}
let getResult = (city) => {
  let link = `${url}weather?q=${city}&appid=${apikey}&units=metric&lang=az`
  fetch(link)
    .then((response) => {
      return response.json()
    })
    .then(result)
}
let result = (weather) => {
  let city = document.querySelector('.city')
  city.innerText = `${weather.name},${weather.sys.country}`

  let temp = document.querySelector('.temp')
  temp.innerText=`${Math.round(weather.main.temp)}°C`

  let descr=document.querySelector('.descr')
  descr.innerText= weather.weather[0].description

  let minmax=document.querySelector('.minmax')
  minmax.innerText=`${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`

  let pressure=document.querySelector('.pressure')
  pressure.innerText=`Atmosfer Təziqi: ${weather.main.pressure} hpa`

  let humidity=document.querySelector('.humidity')
  humidity.innerText=`Nəmlik: ${weather.main.humidity}%`
  console.log(weather)
  input.value=''
}

let input = document.querySelector('#input')

input.addEventListener('keypress', setQuery)
