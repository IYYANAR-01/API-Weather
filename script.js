calcWeather();  
    
function calcWeather(){    
    
    let request = new XMLHttpRequest();
    let city = "";
    document.getElementById("city").value?city = document.getElementById("city").value:city="Tenkasi";
    let url=`https://api.api-ninjas.com/v1/weather?city=${city}`;
    request.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            console.log(request.responseText);
            console.log(typeof(request.responseText));
            var weather=JSON.parse(request.responseText);
            console.log((weather));
            city = city.charAt(0).toUpperCase()+city.slice(1);
            document.getElementById("value1").innerText = city;
            document.getElementById("value2").innerText = weather.cloud_pct;
            document.getElementById("value3").innerText = weather.temp + " °C";
            document.getElementById("value4").innerText = weather.feels_like + " °c";
            document.getElementById("value5").innerText = weather.humidity + " %";
            document.getElementById("value6").innerText = weather.wind_speed + " Km/h";

      }
    }   
    request.open("GET",url);
    request.setRequestHeader("X-Api-Key","Ms1VAC/gL54jlauoKtG4vg==Qna7a7Ktwq4BNxCA");
    request.send();
}