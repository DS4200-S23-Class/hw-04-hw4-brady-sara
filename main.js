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


function addPoint() {
	// get the user input selections
	let xInput = document.getElementById("x-coord");
	let yInput = document.getElementById("y-coord");

	// get the values from the user selections
	let xCoord = xInput.value;
	let yCoord = yInput.value;

	// convert the values to the same ratio for the graph
	let x = xCoord * 50;
	let y = 500 - (yCoord * 50);

	// get frame to add a point to graph
	let frame = document.getElementById("frame");

	// add a circle to the html
	let circleStr = '<circle cx="' + x + '" cy="' + y + '" r="10"/>';
	frame.innerHTML += circleStr;

	let points = document.getElementsByTagName("circle");

	// loop through all points
	for (let i = 0; i < points.length; i++) {
	    
	    // check each point for clicks
	    let point = points[i];
	    point.addEventListener("click", pointClicked);
}
}

// get the button Id
let pointButton =  document.getElementById("subButton");
// listen for a click
pointButton.addEventListener("click", addPoint);

// Create list of points
let points = document.getElementsByTagName("circle");

// loop through all points
for (let i = 0; i < points.length; i++) {
    
    // check each point for clicks
    let point = points[i];
    point.addEventListener("click", pointClicked);
}