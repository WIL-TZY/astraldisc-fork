let attached = false;
 
let imageContainer = document.querySelector("#graze");

const followMouse = (event) => {
	imageContainer.style.left = event.x - 17 + "px";
	imageContainer.style.top = event.y - 16 + "px";
}

function showImage() {
  	if (!attached) {
		attached = true;
		imageContainer.style.display = "block";
		document.addEventListener("mousemove", followMouse);
		setTimeout(function () {
			function fadeOut(el) {
				var opacity = 1; // Initial opacity
				var interval = setInterval(function() {
				   	if (opacity > 0) {
					  	opacity -= 0.1;
					  	el.style.opacity = opacity;
				   	} else {
					  	clearInterval(interval); // Stop the interval when opacity reaches 0
					  	el.style.display = 'none'; // Hide the element
				   	}
				}, 30);
			}
			fadeOut(imageContainer);
		},1)
  	}
}

function hideImage() {
	attached = false;
	imageContainer.style.display = "";
	document.removeEventListener("mousemove", followMouse);
}