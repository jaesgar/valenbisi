function showOption (name, station){
    optionList = document.getElementById("optionsList");
    newBike = "<li id=\"station" + station + "\">" 
                          + "<strong>" + name + "</strong>" 
						  + " Estacion: " +  station
						  + '<button type="button" class="remove" id="remove' + station + '"> borrar </button>'
						  + "</li>";
	optionList.innerHTML = optionList.innerHTML + newBike;
	removeButton = document.querySelector("#remove"+station);
	removeButton.value= station;
//	removeButton.addEventListener("click", function () {alert(this.stationId);removeOption(this.stationId);}, false);
//	removeButton.addEventListener("click", removeOption, false);

}


function showOptions() {
	optionList = document.getElementById("optionsList");
	optionList.innerHTML = "";
	if (localStorage["valenbisi"]) {
		var conf = JSON.parse(localStorage["valenbisi"]);
		for (var key in conf){
			showOption(key, conf[key]);
		}
	}
	removeButtons = document.querySelectorAll("button.remove");
	for (var i = 0; i < removeButtons.length; i++) {
 		removeButtons[i].addEventListener("click",removeOption, false);
	}
	
}

function removeOption (removeButton) {
	var optionList = document.getElementById("optionsList");
	optionList.innerHTML = "";
	alert(removeButton.target.value);
//	showOptions();
}

function removedOption () {
	var optionList = document.getElementById("optionsList");
	optionList.innerHTML = "";
//	showOptions();
}

showOptions();
