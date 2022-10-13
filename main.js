const apikey = 'cc7c8fdfcbbccc9dc62e21bde4bb83ee'

let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let descr=document.querySelector('.descr')
let minmax=document.querySelector('.minmax')
let humidity=document.querySelector('.humidity')
let pressure=document.querySelector('.pressure')
let img=document.querySelector('.icon')


fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=${apikey}&units=metric&lang=az`)
.then(res=>res.json())
.then(data=>{
  console.log(data)
  let iconcode=data.weather[0].icon
  let icon_url= "http://openweathermap.org/img/w/" + iconcode + ".png"
  city.innerText = `${data.name},${data.sys.country}`,
  temp.innerText=`${Math.round(data.main.temp)}°C`,
  descr.innerText= data.weather[0].description,
  minmax.innerText=`${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`,
  pressure.innerText=`Atmosfer Təziqi: ${data.main.pressure} hpa`,
  humidity.innerText=`Nəmlik: ${data.main.humidity}%`
  img.setAttribute("src",icon_url)
})


let url = 'https://api.openweathermap.org/data/2.5/'


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
    .catch(error=>alert("Nəticə Tapilmadı"))
}



let result = (weather) => {
  let iconcode=weather.weather[0].icon
  let icon_url= "http://openweathermap.org/img/w/" + iconcode + ".png"
  city.innerText = `${weather.name},${weather.sys.country}`
  temp.innerText=`${Math.round(weather.main.temp)}°C`
  descr.innerText= weather.weather[0].description
  minmax.innerText=`${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
  pressure.innerText=`Atmosfer Təziqi: ${weather.main.pressure} hpa`
  humidity.innerText=`Nəmlik: ${weather.main.humidity}%`
  input.value=''
  img.setAttribute("src",icon_url)
}


let input = document.querySelector('#input')

input.addEventListener('keypress', setQuery)

