function playImages() {
	var images = new Array();
	images[0] = "1.jpg";
	images[1] = "2.jpg";
	images[2] = "3.jpg";
	images[3] = "4.jpg";
	images[4] = "5.jpg";
	images[5] = "6.jpg";
	images[6] = "7.jpg";
	images[6] = "8.jpg";
	images[7] = "9.jpg";
	images[8] = "10.jpg";
	images[9] = "11.jpg";

	var selected = Math.floor((Math.random()*images.length));

	$('#images').parent().css('background','url(http://csesoc.web.cse.unsw.edu.au/projects/dashboard/images/'+images[selected]+')');
	$('#images').parent().css('background-size','cover');
}

playImages();
setInterval(playImages, 60000);