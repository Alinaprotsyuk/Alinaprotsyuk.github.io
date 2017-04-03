$(document).ready(function(){
			var apiKey = 'b04dbf475994a98f5849aa6856a4596d';
            var curl = 'https://api.forecast.io/forecast/';
            var lati = 48.9215;
            var longi = 24.7097;
            var data;
			$.ajax({
			    type: "GET",
			    url: curl + apiKey +"/"+ lati +","+ longi +"?callback=?",
			    dataType: "json",
			    success: function(data){
					//var json = $.parseJSON(data);
					console.log(data);
					
                    $("#currentTime").append(Date(data.currently.time));
                        
			  	},
			  	error: function() {
			    	alert("An error occurred");
			  	}
			});
		});