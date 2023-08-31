    var apikey = '09a89466de52c380033f18743f563f73';
    var units = 'metric';
    var lang = 'ro';

  function searchCity(){
       var city = document.getElementById('search').value; 
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + apikey + '&units=' + units + '&lang=' +lang )
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

      document.getElementById('location').innerHTML = name + ' ('+ country + ')';
      document.getElementById('temp').innerHTML =  temp + ' °C' ;
      document.getElementById('description').innerHTML = description;
      document.getElementById('wind').innerHTML = "Vant " + speed + ' km/h';
      document.getElementById('real').innerHTML = "Real Feel " + feels_like + '°C';
      document.getElementById('demo').style.display = "block";

      fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+ lat + '&lon=' + lon + '&appid=' + apikey + '&units=' + units + '&lang=' +lang)
      .then((response) => response.json())
      .then((data1) => displayForecast(data1));
      
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

   function displayForecast(data1)
   {
    for(i=0;i<39;i+=8){
      
     const forecastBox = document.createElement("div");
     forecastBox.classList.add('col-lg-2','bg-glass','col-12','mx-auto');

     const imgIcon = document.createElement("img");
     forecastBox.appendChild(imgIcon);
     imgIcon.src = 'https://openweathermap.org/img/wn/'+data1.list[i].weather[0].icon+'.png';
     imgIcon.style.width = '65px';
     imgIcon.style.marginLeft ='-10px';

     const tempP = document.createElement("p");
     forecastBox.appendChild(tempP);
     tempP.innerHTML = data1.list[i].main.temp + ' °C';

     const fellP = document.createElement("p");
     forecastBox.appendChild(fellP);
     fellP.innerHTML = ' Real Feel ' + data1.list[i].main.feels_like + ' °C';

     const windP = document.createElement("p");
     forecastBox.appendChild(windP);
     windP.innerHTML = 'Vant ' + data1.list[i].wind.speed + ' km/h';

     const descP = document.createElement("p");
     forecastBox.appendChild(descP);
     descP.innerHTML = data1.list[i].weather[0].description;
     descP.style.textTransform = 'capitalize';

     
     
      var currentDate = new Date();
      var currentDay = currentDate.getDate();
      var newDay = currentDay + 40/(40-i);
   
      currentDate.setDate(newDay);
     
      var year = currentDate.getFullYear();
      var name = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let month = name[currentDate.getMonth()];
      var day = currentDate.getDate();

      var fullDate = day + ' ' + month + ' ' + year ; 

      
const dateP = document.createElement("p");
     forecastBox.appendChild(dateP);
     dateP.innerHTML = fullDate;
   
     const element = document.getElementById("test");
     element.appendChild(forecastBox);
    
    }
        
    }


  /* function forecast(){
    fetch('api.openweathermap.org/data/2.5/forecast?lat='+ {lat} + '&lon=' + {lon}+ '&appid=' + apikey + '&units=' + units )
    .then((response) => response.json())
    .then((data) => displayForecast(data));

   }*/
   


 
  
 

   
    
