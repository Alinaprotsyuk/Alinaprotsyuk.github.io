$(document).ready(function(){
	getWeather("707471");
});
		
$("#IVFR").on("click", function(){
	getWeather("707471");
});

$("#LV").on("click", function(){
	getWeather("702550");
});

$("#LK").on("click", function(){
	getWeather("702569");
});

$("#RV").on("click", function(){
	getWeather("695594");
});

$("#TR").on("click", function(){
	getWeather("691650");
});

$("#HM").on("click", function(){
	getWeather("706369");
});
		
$("#CHR").on("click", function(){
	getWeather("710719");
});

$("#YSH").on("click", function(){
	getWeather("690548");
});
		
function getWeather(city) {
	var URL = "http://api.openweathermap.org/data/2.5/weather?id=";
			var API_KEY = "1e838668ac1b0a52e51b5364dd4b82bd";
			var FULL_URL = URL + city + "&APPID=" + API_KEY;
            var data;
			if (city === "707471") {
				$('#cityName').append("<b>Івано-Франківську</b>");
			}
			if (city === "702550") {
				$('#cityName').append("<b>Львів</b>");
			}
			if (city === "702569") {
				$('#cityName').append("<b>Луцьк</b>");
			}
			if (city === "695594") {
				$('#cityName').append("<b>Рівне</b>");
			}
			if (city === "691650") {
				$('#cityName').append("<b>Тернопіль</b>");
			}
			if (city === "706369") {
				$('#cityName').append("<b>Хмельницький</b>");
			}
			if (city === "710719") {
				$('#cityName').append("<b>Чернівці</b>");
			}
			if (city === "690548") {
				$('#cityName').append("<b>Ужгород</b>");
			}
			if (city === "702550") {
				$('#cityName').append("<b>Львів</b>");
			}
			if (city === "702550") {
				$('#cityName').append("<b>Львів</b>");
			}
			if (city === "702550") {
				$('#cityName').append("<b>Львів</b>");
			}
			if (city === "702550") {
				$('#cityName').append("<b>Львів</b>");
			}
			$.ajax({
			    type: "GET",
			    url: FULL_URL,
			    dataType: "json",
			    success: function(data){
					$("#currentTemperature").append("span").html(Math.floor(data.main.temp - 273.15) + "<sup>o</sup>");
					$("#currentWind").append("span").html("Вітер: " + data.wind.speed  + "<span>м/с</span>" + " зі швидкість: " + data.wind.deg + "<sup>o</sup>");
					$("#currentPressure").append("span").html("Тиск: " + data.main.pressure + "hPa");
					$("#currentHumidity").append("span").html("Вологість: " + data.main.humidity + "%");
			  	},
			  	error: function() {
			    	alert("An error occurred");
			  	}
			});
	
}