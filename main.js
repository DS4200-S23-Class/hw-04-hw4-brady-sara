// JS file hw4
// Sara & Brady

// Add border function
function pointClicked() {
	// change class if clicked based on event listener
	this.classList.toggle("addBorder");

	// get x and y coordinates
	let x_var = this.getAttribute("cx") / 50;
	let y_var = (500 - this.getAttribute("cy")) / 50;

	// create new text
	let text1 = "Last point clicked: "
	let text2 = "(" + x_var +"," + y_var + ")"
	
	// replace text
	document.getElementById("last_point1").innerHTML = text1;
	document.getElementById("last_point2").innerHTML = text2;
}

// Create list of points
let points = document.getElementsByTagName("circle");

// loop through all points
for (let i = 0; i < points.length; i++) {
    
    // check each point for clicks
    let point = points[i];
    point.addEventListener("click", pointClicked);
}
