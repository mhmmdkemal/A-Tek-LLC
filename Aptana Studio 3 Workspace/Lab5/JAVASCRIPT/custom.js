window.onload = NEWSpecies;

function NEWSpecies() {
	document.getElementById("species").onchange = toggleEnterNewSpecies;
}

function toggleEnterNewSpecies(){
	var elementID = document.getElementById("species");
	var Species = elementID.options[elementID.selectedIndex].value;
	var tSpecies = document.getElementById("txtSpecies");
	if (Species === "Others"){
	tSpecies.removeAttribute("readonly");
	}
	else{
		tSpecies.value = "";
		tSpecies.setAttribute("readonly","readonly");
	}  
}