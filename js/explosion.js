let attachedexp = false;
 
let image = document.querySelector("#explosion");

const followMouseExp = (event) => {
	image.style.left = event.x - 60 + "px";
	image.style.top = event.y - 100 + "px";
};

function showExplosion() {
  	if (!attachedexp) {
		attachedexp = true;
		image.style.display = "block";
		document.addEventListener("mousemove", followMouseExp);
		setTimeout(function () {
            resetExplosion();
			hideExplosion(image);
		}, 1702)
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
        setTimeout(function() {
            $img.attr('src', '../assets/img/explosion-boom.gif');
        }, 0);
    });
}