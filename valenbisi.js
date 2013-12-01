function showBikes (station,name){
	  var xhr = new XMLHttpRequest();
       xhr.open("GET", "http://www.valenbisi.es/service/stationdetails/valence/" + station, true);
	   xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
			  var free = xhr.responseXML.getElementsByTagName("free")[0];
			  var bicis = xhr.responseXML.getElementsByTagName("available")[0];
			  
			  var report= document.getElementById("report");
  			  var newBike = "<div><strong>" + name + "</strong>" 
						  + " bicis: " +  bicis.textContent
						  +	" puestos: " + free.textContent
						  + "</div> <br/>";
			  report.innerHTML = report.innerHTML + newBike;
            }
          }
        };
      xhr.send();
}

//localStorage["valenbisi"] = JSON.stringify({1:"test1",2:"test2"});

if (localStorage["valenbisi"]) {
	var conf = JSON.parse(localStorage["valenbisi"]);
	for (var key in conf){
		showBikes(key, conf[key]);
	}
}

