	  var xhr = new XMLHttpRequest();
       xhr.open("GET", "http://www.valenbisi.es/service/stationdetails/valence/14", true);
	   xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              //alert(xhr.responseText);
			  //document.write(xhr.responseText);
			  var free = xhr.responseXML.getElementsByTagName("free")[0];
			  var bicis = xhr.responseXML.getElementsByTagName("available")[0];
			  document.writeln("bicis: " + bicis.textContent);
              document.writeln("puestos: " + free.textContent);
            }
          }
        };
      xhr.send();
