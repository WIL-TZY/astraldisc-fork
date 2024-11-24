let attachedexp = false;
 
let image = document.querySelector("#explosion");

const followMouseExp = (event) => {
	image.style.left = event.x - 70 + "px";
	image.style.top = event.y - 105 + "px";
};

function showExplosion() {
  	if (!attachedexp) {
		attachedexp = true;
		image.style.display = "block";
		document.addEventListener("mousemove", followMouseExp);
		setTimeout(function () {
			resetExplosion();
			hideExplosion(image);
		}, 1710)
  	}
};

function hideExplosion() {
	attachedexp = false;
	image.style.display = "";
	document.removeEventListener("mousemove", followMouseExp);
};

function resetExplosion() {
    $(document).ready(function(){
        var $img = $('#explosion img');
        $img.attr('src', '/assets/img/cursor/explosion-boom.gif');
    });
}