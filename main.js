// JS file hw4
// Sara & Brady

// Doesnt work yet :(
function pointClicked() {
	console.log("clicked");
	let pointed = document.getElementById("point");

	pointed.classList.toggle("addBorder");


}


document.getElementsById("point")
		.addEventListener('click', pointClicked);