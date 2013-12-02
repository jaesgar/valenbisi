function showOption (station, name){
    optionList = document.getElementById("optionsList");
    newBike = "<li id=\"station" + station + "\">" 
                          + "<strong>" + name + "</strong>" 
						  + " Estacion: " +  station
						  + '<button type="button" class="remove" id="remove' + station + '"> borrar </button>'
						  + "</li>";
	optionList.innerHTML = optionList.innerHTML + newBike;
	removeButton = document.querySelector("#remove"+station);
	removeButton.value= station;
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
	if (localStorage["valenbisi"]) {
		var conf = JSON.parse(localStorage["valenbisi"]);
		delete conf[removeButton.target.value];
		localStorage["valenbisi"] = JSON.stringify(conf);
	}
	showOptions();
}

function addOption (){
	station = document.querySelector("#station");
	nickName = document.querySelector("#nickName");
	stationNumber = parseInt(station.value);
	if (nickName.value != "" && station.value != "" && !isNaN(stationNumber) && stationNumber > 0){
		var conf = JSON.parse(localStorage["valenbisi"]);
		conf[stationNumber] = nickName.value;
		localStorage["valenbisi"]  = JSON.stringify(conf);
		showOptions();
		station.value="";
		nickName.value="";
	}
}

function loadOptions(){
	showOptions();	
	document.querySelector('#saveOption').addEventListener('click', addOption);
}


document.addEventListener('DOMContentLoaded', loadOptions);
