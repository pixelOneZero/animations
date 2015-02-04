var poz = {
	navigation: function() {
		var container = document.getElementById("navigation");
		var iconLines = document.getElementsByClassName("nav-icon");
		container.addEventListener("click", function() {
			for (var a=0; a <iconLines.length; a++) {
				iconLines[a].classList.add("close");
			}
			container.classList.add("open");
		});	
	},
	init: function() {
		poz.navigation();
	}
}

window.addEventListener("load", function() {
	poz.init();
})