// JS file hw4
// Sara & Brady

// Add border function
function pointClicked() {
	// change class if clicked based on event listener
	this.classList.toggle("addBorder");
}

// Create list of points
let points = document.getElementsByTagName("circle");

// loop through all points
for (let i = 0; i < points.length; i++) {
    
    // check each point for clicks
    let point = points[i];
    point.addEventListener("click", pointClicked);
}
