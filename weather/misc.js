
var apikey = '09a89466de52c380033f18743f563f73';
var units = 'metric';

function searchCityHome(cookie){
getCookie('location');
if(cookie) {
  var city = cookie;
}
else
 {city = document.getElementById('search-home').value;
  setCookie('location',city,30);}
 
fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=6aa945e0b4af4f65b5c5e8d92f45ef23&units=metric')
 .then((response) => response.json())
 .then((data) => displayWeatherHome(data));    
 
 document.querySelector('.search-area-home').style.display = 'none';
 document.querySelector('.show').style.display = 'block';
 document.querySelector('.change').style.display = 'block';



 
}

function displayWeatherHome(data){



const  {name} = data ;
const {icon, description} = data.weather[0];
const {temp,feels_like} = data.main;
const {speed} = data.wind;
const {country} = data.sys;

document.getElementById('location-home').innerHTML = 'Weather in ' + name + '('+ country + ')';
document.getElementById('temp-home').innerHTML = "Temperature is : " + temp + ' °C' ;
document.getElementById('description-home').innerHTML = description;
document.getElementById('wind-home').innerHTML = "Wind speed is : " + speed + ' km/h';
document.getElementById('real-home').innerHTML = "Feels like : " + feels_like + '°C';
document.querySelector('.icon-home').src = 'https://openweathermap.org/img/wn/'+icon+'.png';
document.querySelector('.image-home').src = "https://source.unsplash.com/1600x900/?" + name;

  
}   


function onEnter(){

var input = document.getElementById("search");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
document.getElementById("submit").click();
}
});

}
function onEnterHome(){

var input = document.getElementById("search-home");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
 document.getElementById("submit-home").click();
}
});

}

function setCookie(cname,city,exdays) {
var cname = 'location';
const d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
let expires = "expires=" + d.toUTCString();
document.cookie = cname + "=" + city + ";" + expires + ";path=/";
}

function getCookie(cname) {
let name = cname + "=";
let decodedCookie = decodeURIComponent(document.cookie);
let ca = decodedCookie.split(';');
for(let i = 0; i <ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);

  }
}
return "";
}

function checkCookie() {
let city = getCookie("location");
if (city != "") {
  searchCityHome(city);
} else {
   if (city != "" && city != null) {
     setCookie("location", city, 30);
   }
}
}


function onLoad (){
onEnter();
onEnterHome();
checkCookie();

if(getCookie('location')){
  document.getElementById('location-home').style.display = 'block';
  document.querySelector('.search-area-home').style.display = 'none';
  document.querySelector('.change').style.display = 'block';


}
else {
  document.querySelector('.search-area-home').style.display = 'block';
  document.querySelector('.change').style.display = 'none';


}


}

function searchCity(){
  

   var city = document.getElementById('search').value;
    
   
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + apikey + '&units=' + units )
   .then((response) => response.json())
   .then((data) => displayWeather(data));    
   

  }



function displayWeather(data){
  const {name} = data ;
  const {icon, description,main} = data.weather[0];
  const {temp,feels_like} = data.main;
  const {speed} = data.wind;
  const {country} = data.sys;
  const {lon,lat} = data.coord;

  console.log(lon,lat);

  document.getElementById('location').innerHTML = name + ' ('+ country + ')';
  document.getElementById('temp').innerHTML =  temp + ' °C' ;
  document.getElementById('description').innerHTML = description;
  document.getElementById('wind').innerHTML = "Wind speed is " + speed + ' km/h';
  document.getElementById('real').innerHTML = "Feels like " + feels_like + '°C';
  document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+icon+'.png';
  //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
  document.getElementById('demo').style.display = "block";

  
  const ceva1 = document.querySelectorAll('.city');
  ceva1.forEach(item1 => {
  item1.style.display = 'block';    
});
  let bg ='';
   switch(main) {
   case "Clear":
    bg = "url('clear.jpg')";
   break;
   case "Rain":
    bg = "url('rain.jpg')";
  break;
  case "Clouds":
    bg = "url('clouded.jpg')";
  break;
  case "Snow":
    bg = "url('snow.jpg')";
  break;
default:
  bg = '';
}

document.getElementById('bg-change').style.backgroundImage = bg;
document.getElementById('bg-change').style.backgroundPosition = 'center';
document.getElementById('bg-change').style.backgroundSize = 'cover';
document.getElementById('bg-change').style.backgroundRepeat ='no-repeat';



}   


function forecast(){
fetch('api.openweathermap.org/data/2.5/forecast?lat='+ lat + '&lon='+lon+'&appid=' + apikey + '&units=' + units )
.then((response) => response.json())
.then((data) => displayWeather(data));

}


function showHomeCity(){
 

if(getCookie('location')) {


  const ceva = document.querySelectorAll('.home');
  ceva.forEach(item => {
  item.style.display = 'block';
});

document.querySelector('.show').style.display = 'none';
document.querySelector('.close').style.display = 'block';
document.querySelector('.change').style.display = 'block';


}


}

function closeTab(){
const ceva = document.querySelectorAll('.home');
  ceva.forEach(item => {
  item.style.display = 'none';
});

document.querySelector('.show').style.display = 'block';
document.querySelector('.close').style.display = 'none';
}



function newCity(){
document.cookie = "location=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
location.reload();
}






