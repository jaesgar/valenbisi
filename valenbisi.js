function showBikes (name, station){
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

showBikes("test1", 1);
showBikes("test2", 2);
