// creating variables so we can access the html elements through js
let city = document.getElementById('city');
let degrees = document.getElementById('degrees');
let weather1 = document.getElementById('weather');
let input = document.getElementById('input');
let form = document.getElementById('form');
let container = document.querySelector('.container')
let current_date = document.getElementById('current_date');
let weather_desc = document.getElementById('weather-desc');
let weather_icon = document.getElementById('weather-icon');
// the api key i used 
const apiKey = 'a6c87d5b51b8d49fbedbb53ef8064c03';
// this variable stores the input entered from the user
let searchQuery = '';
form.addEventListener('submit',(e)=>{
    // prevents submitting empty input
    e.preventDefault();
    // storing the input value
    searchQuery = e.target.input.value;
    // calling the fetchAPI function when user submit a city
    fetchAPI();
})
// this function allows us to use the api
async function fetchAPI(){
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${apiKey}`
    const respose = await fetch(baseURL);
    const data =  await respose.json();
    Temp(data.main);
    Weather(data.weather);
    Weather_Desc(data.weather);
    Weather_Icon(data.weather);
    city.textContent = input.value;
    input.value = '';
    console.log(data.weather);
}
// the Temp function converts Kelvin into celcius and then show the temperature
function Temp(results){
    let celcius = Math.floor(results.temp - 273.15);
    let temp = `<div class="center degrees" id="degrees">${celcius}°C</div>`
    degrees.innerHTML = temp;
}
// this function show us the weather
function Weather(results){
    weather1.innerHTML = `<div class="center weather" id="weather">${results[0].main}</div>`
}
// this function show us the weather description
function Weather_Desc(results){
    weather_desc.innerHTML = `<div class="center weather" id="weather-desc">${results[0].description}</div>`
}
function Weather_Icon(results){
    switch(results[0].icon){
        case '01d':
            let img = document.createElement('img');
            img.src = 'weather_icons/01d.png'
            degrees.appendChild(img)
            break;
        case '02d':
            let img1 = document.createElement('img');
            img1.src = 'weather_icons/02d.png'
            degrees.appendChild(img1)
            break;
        case '03d':
            let img2 = document.createElement('img');
            img2.src = 'weather_icons/03d.png'
            degrees.appendChild(img2)
            break;
        case '04d':
            let img3 = document.createElement('img');
            img3.src = 'weather_icons/04d.png'
            degrees.appendChild(img3)
            break;
        case '09d':
            let img4 = document.createElement('img');
            img4.src = 'weather_icons/09d.png'
            degrees.appendChild(img4)
            break;
        case '10d':
            let img5 = document.createElement('img');
            img5.src = 'weather_icons/10d.png'
            degrees.appendChild(img5)
            break;
        case '11d':
            let img6 = document.createElement('img');
            img6.src = 'weather_icons/11d.png'
            degrees.appendChild(img6)
            break;
        case '13d':
            let img7 = document.createElement('img');
            img7.src = 'weather_icons/13d.png'
            degrees.appendChild(img7)
            break;
        case '50d':
            let img8 = document.createElement('img');
            img8.src = 'weather_icons/50d.png'
            degrees.appendChild(img8)
            break;
        case '01n':
            let img9 = document.createElement('img');
            img9.src = 'weather_icons/01n.png'
            degrees.appendChild(img9)
            break;
        case '02n':
            let img10 = document.createElement('img');
            img10.src = 'weather_icons/02n.png'
            degrees.appendChild(img10)
            break;
        case '03n':
            let img11 = document.createElement('img');
            img11.src = 'weather_icons/03n.png'
            degrees.appendChild(img11)
            break;
        case '04n':
            let img12 = document.createElement('img');
            img12.src = 'weather_icons/04n.png'
            degrees.appendChild(img12)
            break;
        case '09n':
            let img13 = document.createElement('img');
            img13.src = 'weather_icons/09n.png'
            degrees.appendChild(img13)
            break;
        case '10n':
            let img14 = document.createElement('img');
            img14.src = 'weather_icons/10n.png'
            degrees.appendChild(img14)
            break;
        case '11n':
            let img15 = document.createElement('img');
            img15.src = 'weather_icons/11n.png'
            degrees.appendChild(img15)
            break;
        case '13n':
            let img16 = document.createElement('img');
            img16.src = 'weather_icons/13n.png'
            degrees.appendChild(img16)
            break;
        case '50n':
            let img17 = document.createElement('img');
            img17.src = 'weather_icons/50n.png'
            degrees.appendChild(img17)
            break;
    }
}
// show us the current date (day, month, year)
function currentDate1(){
let data = new Date();
let today = data.getDay();
let month = data.getMonth();   
let year = data.getFullYear(); 
switch(today){
    case 1: 
        today = 'Monday';
        break;
    case 2: 
        today = 'Tuesday';
        break;
    case 3: 
        today = 'Wednesday';
        break;
    case 4: 
        today = 'Thursday';
        break;
    case 5: 
        today = 'Friday';
        break;
    case 6: 
        today = 'Saturday';
        break;
    case 7: 
        today = 'Sunday';
        break;
}
switch(month){
    case 0: 
        month = 'January';
        break;
    case 1: 
        month = 'February';
        break;
    case 2: 
        month = 'March';
        break;
    case 3: 
        month = 'April';
        break;
    case 4: 
        month = 'May';
        break;
    case 5: 
        month = 'June';
        break;
    case 6: 
        month = 'July';
        break;
    case 7: 
        month = 'August';
        break;
    case 8: 
        month = 'September';
        break;
    case 9: 
        month = 'October';
        break;
    case 10: 
        month = 'November';
        break;
    case 11: 
        month = 'December';
        break;
} 
    current_date.innerHTML = `<div class="center date" id="current_date">${today}, ${month}, ${year}</div>`;
}
currentDate1();
